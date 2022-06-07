require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const authRoute = require("./route/authRoute");


//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/auth", authRoute);

//controllers


const port = process.env.PORT || 5123;
app.listen(port);
console.log("Server is runnning at " + port);
