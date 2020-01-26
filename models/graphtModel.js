const mongoose = require("mongoose");

let graphtSchema = new mongoose.Schema({
    image: String,
    type: String,
    doctorRequested: Boolean,
    doctorDiagnosis: {
        confidence: Number,
        condition: String
    },
    aiDiagnosis: {
        confidence: Number,
        condition: String
    },
    date: { type: Date, default: Date.now }
});

graphtSchema.set("toJSON", { virtuals: true });

const Grapht = mongoose.model("Grapht", graphtSchema, "Graphts");

module.exports = { Grapht };
