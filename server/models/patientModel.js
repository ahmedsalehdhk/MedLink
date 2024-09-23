
const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

// change this to change type of product (maybe dynamically?)
const patientSchema =  new Schema({
    fullName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cancerType: {
        type: String,
        required: true
    },
    diagnosisDate: {
        type: Date,
        required: true
    },
    lastMedication: {
        type: String,
        required: true
    },
    dateOfLastMedication: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Patient', patientSchema);