const app = require("./app")
const http = require("http")
const ConnectToDB = require("./connectToDB/connectToDB")
const server = http.createServer(app)
require("dotenv").config()
const port = process.env.PORT || 4000


const startServer = async()=>{
    try {
        await ConnectToDB()
        server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
    } catch (error) {
        console.log(error)
    }
}

startServer()
