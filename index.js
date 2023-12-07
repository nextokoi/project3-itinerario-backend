require("dotenv").config()
const addRelationsToModels = require("./database/relations")

const {
  checkConnection,
  syncModels
} = require("./database/index")

async function checkDB() {
  await checkConnection()
  await addRelationsToModels()
  await syncModels()
}

; (async function startAPI() {
  await checkDB()
  //startExpress()
})()  