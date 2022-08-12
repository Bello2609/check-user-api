const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const checkRoute = require("./route/check");
require("dotenv").config();

const PORT = process.env.port || 5400

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(cors());

app.use(checkRoute);
mongoose.connect("mongodb+srv://proctor_test:XGlC9xvWLc1S0pyP@cluster0.buffyyq.mongodb.net/?retryWrites=true&w=majority").then(result=>{
    app.listen(PORT, ()=>{
        console.log(`the server is running at port ${PORT}`);
    });
});
