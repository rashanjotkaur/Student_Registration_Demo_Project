const studentRecords = require('../models/studentSchema');

const getStudents = async(req,res) => {
    console.log("GET STUDENTS....");
    console.log("get students: ", req.body);
    try{
        const getStudents = await studentRecords.find(); 
        res.status(200).send(getStudents);
    }catch(e){
        res.status(400).send(e);
    }
}

const getStudentwithID = async(req,res) => {
    console.log("get particular student ");
    try{
        const _id = req.params.id;
        const getStudent= await studentRecords.findById(_id);
        if(getStudent)
            res.status(200).send(getStudent);
        else    
            res.status(200).send("Student with this Id doesn't exist.")
    }catch(e){
        res.status(400).send(e);
    }
}

const updateStudent = async(req,res) => {
    console.log("updateStudent: ");
    try{
        const _id = req.params.id;
        const data = await studentRecords.findById(_id);
        console.log("data ", data);
        const response = await data.updateOne(req.body);
        res.status(201).send(response);
    }catch(e){
        res.status(400).send(e);
    }
}

const deleteStudent = async(req,res) => {
    console.log("deleteStudent: ");
    try{
        const _id = req.params.id;
        const response = await studentRecords.deleteOne({_id: _id});
        res.status(201).send(response);
    }catch(e){
        res.status(500).send(e);
    }
}

const addStudent = async(req,res) => {
    console.log("addStudent: ", req.body);
    try{
        const data = new studentRecords(req.body);
        const response = await data.save();
        res.status(200).send(response);
    }catch(e){
        res.status(400).send(e);
    }
}


module.exports = {
    getStudents,
    getStudentwithID,
    updateStudent,
    deleteStudent,
    addStudent
}