const express = require('express');
// const Patient = require('../models/patientModel')

const { getPatients, getPatient, createPatient, updatePatient, deletePatient } = require('../controllers/patientControllers');

const router = express.Router();

// get all patients
router.get('/', getPatients)

// get a single patient
router.get('/:id', getPatient)

// post a new patient
router.post('/', createPatient)

// update a patient
router.patch('/:id', updatePatient)

// delete a patient
router.delete('/:id', deletePatient)


module.exports = router;