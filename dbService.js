const MONGODB_URI = "mongodb+srv://admin:1yHRTIYgsa1N6ivS@cluster0-f7fvn.mongodb.net/test?retryWrites=true&w=majority"
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const URI = process.env.MONGODB_URI || MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Make sure MongoDB is running
mongoose.Promise = global.Promise;

const { Grapht } = require("./models/graphtModel");

module.exports = { Grapht };
