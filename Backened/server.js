require("dotenv").config();
// require(configDotenv)
// const { configDotenv } = require('dotenv');
const express = require('express');
const app = express();
require("./db/conn");

// app.use();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})
