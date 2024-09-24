require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

// importing routes
const patientRoutes = require('./routes/patientRoutes')

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log("Request to: ", req.path, " Request method: ", req.method);
    next();
})
app.use(cors())

// routes
app.use('/api/patients', patientRoutes)

// connect to db and listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log("Conncted to db & listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })