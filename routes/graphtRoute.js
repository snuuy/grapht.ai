const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Grapht } = require("../dbService");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const automl = require("@google-cloud/automl")
const fs = require('fs')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

router.post("/upload", upload.single('img'), async (req, res) => {
    if (!req.file) {
        res.status(400).send("No file selected")
        return;
    }

    const client = new automl.PredictionServiceClient();

    const projectId = "grapht";
    const computeRegion = "us-central1";
    const modelId = "ICN122525177752846336";
    const filePath = req.file.path;
    const scoreThreshold = "0.5";
    const params = { score_threshold: 0.0 };

    // Get the full path of the model.
    const modelFullId = client.modelPath(projectId, computeRegion, modelId);

    // Read the file content for prediction.
    let img = fs.readFileSync(req.file.path)
    img = Buffer.from(img).toString('base64');

    const payload = {};
    payload.image = { imageBytes: img };

    const [response] = await client.predict({
        name: modelFullId,
        payload: payload,
        params: params,
    });

    let predictionName = ""
    let predictionScore = 0

    for (result of response.payload) {
        if (result.classification.score >= predictionScore) {
            predictionScore = result.classification.score
            predictionName = result.displayName
        }
    }

    if (predictionScore < 0.5) {
        predictionScore = 1 - predictionScore
        predictionName = "None"
    }

    await Grapht.create({
        image: img,
        type: req.file.mimetype,
        aiDiagnosis: {
            confidence: predictionScore,
            condition: (predictionName == "seborrheic_keratosis" ? "Seborrheic Keratosis" : capitalizeFirstLetter(predictionName))
        }
    })
        .then(grapht => setTimeout(() => res.status(200).send({ grapht }), 2000))
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
    Grapht.find().sort('-date')
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
