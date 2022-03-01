import { ethers } from "ethers";
import express from "express";
import GreeterAbi from './contracts/artifacts/contracts/Greeter.sol/Greeter.json'
import { Greeter } from "./contracts/typechain";
import dotenv from 'dotenv'
dotenv.config()

const providerUrl = {
  hardhat: "http://127.0.0.1:8545",
  rinkeby: process.env.ALCHEMY_URL || ""
}

async function getProvider() {
  const provider = new ethers.providers.JsonRpcProvider(
    providerUrl.rinkeby
  );
  return provider;
}

const GreeterAddress = {
  local: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  rinkeby: "0xcEf38F8199890981DE867313F4c8CB06B905372f"
}

async function getSigner() {
  const provider = await getProvider()
   // signer for localhost
  // const signer = provider.getSigner(0)
  // signer for other node
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY || "", provider)
  console.log("signer", await signer.getAddress())
  return signer
}

async function getContract() {
  const signer = await getSigner()
  const contract = new ethers.Contract(GreeterAddress.rinkeby, GreeterAbi.abi, signer) as Greeter
  return contract
}



interface INumberUpdated {
  oldNumber:number,
  newNumber:number
  time: string
}

const updatedList: INumberUpdated[] = []

interface IGreeting {
  text:string
  time:string
}

const greetingList: IGreeting[] = []

async function numberUpdatedEventListener() {
  const provider = await getProvider();
  const blockNumber = await provider.getBlockNumber()
  console.log("block #", blockNumber)
 

  const contract = await getContract()

  
  const updatedFilter = contract.filters.NumberUpdated()
  const event = await contract.queryFilter(updatedFilter, 10252806, blockNumber)
  event.forEach( e => {
    const data: INumberUpdated = {
      oldNumber: e.args.oldNumber.toNumber(),
      newNumber: e.args.newNumber.toNumber(),
      time: new Date(e.args.time.toNumber() * 1000).toISOString()
    }
    updatedList.push(data)
  })

  console.table(updatedList)

  contract.on(updatedFilter, (oldNumber, newNumber, time) => {
    const data: INumberUpdated = {
      oldNumber: oldNumber.toNumber(),
      newNumber: newNumber.toNumber(),
      time: new Date(time.toNumber() * 1000).toISOString()
    }
    updatedList.push(data)
    console.table(updatedList)
  })
}

async function greetingEventListener() {
  const provider = await getProvider();
  const blockNumber = await provider.getBlockNumber()
  console.log("block #", blockNumber)
 

  const contract = await getContract()

  const greetingFilter = contract.filters.GreetingEvent()
  const greetingEvents = await contract.queryFilter(greetingFilter, 10252806, blockNumber)
  greetingEvents.forEach( e => {
    const data: IGreeting = {
      text: e.args.greeting,
      time: new Date(e.args.time.toNumber() * 1000).toISOString()
    }
    greetingList.push(data)
  })
  console.table(greetingList)
  contract.on(greetingFilter, (text, time) => {
    const data: IGreeting = {
      text: text,
      time: new Date(time.toNumber() * 1000).toISOString()
    }
    greetingList.push(data)
    console.table(greetingList)
  })
}

function GreeterListener() {
  numberUpdatedEventListener()
  greetingEventListener()  
}

async function main() {
  
  GreeterListener()

  const app = express();

  const PORT = 8000;

  app.get("/", (req, res) => res.send("Express + TypeScript Server"));

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

main();
