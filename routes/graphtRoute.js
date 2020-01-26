const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Grapht } = require("../dbService");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')

router.post("/upload", upload.single('img'), (req, res) => {
    if (!req.file) {
        res.status(400).send("No file selected")
        return
    }
    let img = fs.readFileSync(req.file.path)
    img = Buffer(img).toString('base64');
    Grapht.create({
        image: img,
        type: req.file.mimetype,
        diagnosis: {
            confidence: 5,
            condition: "test"
        }
    })
        .then(grapht => res.status(200).send({ grapht }))
        .catch(err => res.status(400).send(err))
});

router.get("/image/:graphtid", async (req, res) => {
    const grapht = await Grapht.findById(req.params.graphtid)
    res.writeHead(200, {
        'Content-Type': grapht.type,
        'Content-disposition': 'attachment;filename=' + req.params.graphtid,
        'Content-Length': grapht.image.length
    });
    res.end(Buffer.from(grapht.image, 'binary'));
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

router.post("/request-doctor", (req, res) => {
    Grapht.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.graphtId), { doctorRequested: true })
        .then(grapht => res.status(200).send(grapht))
        .catch(err => res.status(500).send(err))
});

module.exports = router;
