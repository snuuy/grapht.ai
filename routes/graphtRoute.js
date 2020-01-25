const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Grapht } = require("../dbService");

router.post("/upload", (req, res) => {

    /* do image upload stuff */

    /*do cv stuff..*/

    Grapht.create({
        image: "test.jpg",
        diagnosis: {
            confidence: 5,
            condition: "test"
        }
    })
        .then(grapht => res.status(200).send(grapht))
        .catch(err => res.status(400).send(err))
});

router.get("/all", (req, res) => {
    Grapht.find()
        .then(graphts => res.status(200).send(graphts))
        .catch(err => res.status(500).send(err))
});

router.post("/diagnose", (req, res) => {
    Grapht.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.graphtId), { doctorDiagnosis: req.body.diagnosis })
        .then(grapht => res.status(200).send(grapht))
        .catch(err => res.status(500).send(err))
});

module.exports = router;
