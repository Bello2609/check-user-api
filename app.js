const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require();
const checkRoute = require("./route/check");
require("dotenv").config();

const PORT = process.env.port || 5400

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(cors());

app.use(checkRoute);
mongoose.connect("your mongodb url").then(result=>{
    app.listen(PORT, ()=>{
        console.log(`the server is running at port ${PORT}`);
    });
});
