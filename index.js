require("dotenv").config()


const {
    checkConnection,
    //syncModels
  } = require("./database/index")
  
  async function checkDB() {
    await checkConnection()
    //addRelationsToModels()
    //await syncModels()
  }

  ; (async function startAPI() {
    await checkDB()
    //startExpress()
  })()  