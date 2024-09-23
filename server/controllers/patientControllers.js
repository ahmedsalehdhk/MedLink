const Patient = require('../models/patientModel');
const mongoose = require('mongoose');

// get all patients
const getPatients = async (req, res) => {
    const patients = await Patient.find({}).sort({createdAt: -1});

    res.status(200).json(patients);
}

// get a single patient
const getPatient = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'});
    }

    const patient = await Patient.findById(id)
    if(!patient){
        return res.status(404).json({error: 'No such patient found'});
    }
    return res.status(200).json(patient);
}

// create a new patient
const createPatient = async (req, res) => {
    const { fullName, age, gender, contact, address, cancerType, diagnosisDate, lastMedication, dateOfLastMedication, status } = req.body;
    try {
        const patient = await Patient.create({fullName, age, gender, contact, address, cancerType, diagnosisDate, lastMedication, dateOfLastMedication, status});
        res.status(200).json(patient);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update a patient
const updatePatient = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'});
    }

    const patient = await Patient.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!patient){
        return res.status(404).json({error: 'No such patient found'});
    }
    res.status(200).json(patient);
}

// delete a patient
const deletePatient = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'Invalid ID'});
    }

    const patient = await Patient.findOneAndDelete({_id: id});
    if(!patient){
        return res.status(404).json({error: 'No such patient found'});
    }
    res.status(200).json(patient);
} 

module.exports = {
    getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
}