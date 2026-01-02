// Where the route establishment is

const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

require("dotenv").config();

// Creating an express app that uses cors and json (way to communicate with databases)
const app = express(); 
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false,
    },
});

//If the user does yet to the base url, they get the message below
app.get("/", (req, res) => { 
    res.json({message: "Server is running"})
})

// Getting the users, lecture example
app.get("/users", async (req, res) =>{
    try{
        const result = await pool.query("SELECT * FROM users")
        res.json(result.rows)
    } catch(error){
        console.error(error)
        res.status(500).json({error: "Failed to retrieve users"})
    }
})

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on Port 3005")
})

module.exports = app;