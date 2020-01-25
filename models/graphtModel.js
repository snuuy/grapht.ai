const mongoose = require("mongoose");

let graphtSchema = new mongoose.Schema({
    image: String,
    diagnosis: String
});

graphtSchema.set("toJSON", { virtuals: true });

const Grapht = mongoose.model("Grapht", graphtSchema, "Grapht");

module.exports = { Grapht };
