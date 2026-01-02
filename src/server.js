// Where the route establishment is

const express = require("express");
const cors = require("cors")

require("dotenv").config();

const app = express(); // Establishes express app

app.use(cors());
app.use(express.json());

//If the user does yet to the base url, they get the message below
app.get("/", (req, res) => { 
    res.json({message: "Server is running"})
})

// Getting the users, lecture example
app.get("/users", async (req, res) =>{
    try{
        const result = await pool.query("SELECT * FROM users")
    } catch{

    }
})

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on Port 3005")
})

module.exports = app;