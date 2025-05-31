const express = require("express")
const app = express()
const cors = require("cors")
const router = require("./routes/router")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/" , (req , res)=>{
    return res.send("express server")
})

app.use("/api" ,  router)

module.exports =  app