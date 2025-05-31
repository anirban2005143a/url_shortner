const express = require("express")
const router = express.Router()
const {
    CreateShortURL,
    getShortURL
} = require("../controllers/Controllers")

router.post("/create" , CreateShortURL)
router.get("/getURL" , getShortURL)

module.exports = router