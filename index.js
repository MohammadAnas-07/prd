import dotenv from "dotenv"

dotenv.config({
  path: "./.env",
})

let myusername = process.env.name
let dataBase = process.env.database

console.log("value:", myusername)
console.log("value:", dataBase)

console.log("Start of backend project");
