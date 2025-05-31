const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`,
    port: process.env.DB_PORT
})

const ConnectToDB = async () => {
    try {
        await pool.connect()

    } catch (err) {
        console.error("Error creating table:", err);
        throw new Error("Error creating table:", err)
    }
}

module.exports = ConnectToDB