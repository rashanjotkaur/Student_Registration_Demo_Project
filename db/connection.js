// We have to create connection first
const mongoose = require("mongoose");

// Step1:
//this method will return us a promise
// mongodb://localhost:27017 Copy this from MongoDB Compass
// Initally In MongoDB, as I have freshly installed I don't have any databases 
// This method will create the new database
// either we can write localhost == 127.0.0.1
mongoose.createConnection("mongodb://localhost:27017/student-records");
mongoose.connect("mongodb://localhost:27017/student-records")
.then(() => {
    console.log("Connection is Successful..");
}).catch((e) => {
    console.log("No Connection...");
})

//Step2:
// Now we can atleast check if the connection is successful or not
// For this we have to require this connection.js in our express file..
