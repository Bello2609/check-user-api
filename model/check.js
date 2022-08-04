const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const checkSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    otherNames: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Check", checkSchema);