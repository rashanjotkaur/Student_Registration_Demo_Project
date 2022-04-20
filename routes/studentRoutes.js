const express = require('express');
const router = express.Router();

const founderCtrl = require('../controllers/studentControllers');

// GET the data of all students
router.get('/', founderCtrl.getStudents);

// GET the data of particular student with id
router.get('/:id', founderCtrl.getStudentwithID);

// UPDATE the data of particular student with id
router.patch('/:id', founderCtrl.updateStudent);

// DELETE the data of particular student with id
router.delete('/:id', founderCtrl.deleteStudent);

// ADD the data of new student
router.post('/', founderCtrl.addStudent);

module.exports = router;