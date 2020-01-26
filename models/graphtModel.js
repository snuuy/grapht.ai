const mongoose = require("mongoose");

let graphtSchema = new mongoose.Schema({
  image: String,
  doctorDiagnosis: {
    confidence: Number,
    condition: String
  },
  aiDiagnosis: {
    confidence: Number,
    condition: String
  }
});

graphtSchema.set("toJSON", { virtuals: true });

const Grapht = mongoose.model("Grapht", graphtSchema, "Graphts");

module.exports = { Grapht };
