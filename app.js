const express = require('express');
const app = express();

require("./db/connection");

// to get env file
const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '.env')
});
const port = process.env.PORT;

const studentRoute = require('./routes/studentRoutes');

//To convert to JSON Format
app.use(express.json());

app.use('/students', studentRoute);

app.listen(port, () => {
    console.log("Connection is setup at port number: ",port);
});
