const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Id already exists.."],
        ValidityState(value){
            if(!validator.isEmail(this.valueOf)){
                throw new Error("Invalid Email..");
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        unique: true,
        required: true
    },
    city: {
        type: String
    }
});

// We will create a new collection
// We already have a collection studentapis in student-records
const studentRecords = new mongoose.model('studentapis', studentSchema);

// Now we have to export this collection
module.exports = studentRecords;