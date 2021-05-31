const express = require("express");
const app = express();
const routes = require("../../routes");
const { port } = require("../env");
const cors = require('cors');

app.use(cors({
    "origin": "https://presente-camp.vercel.app",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));


app.set("port", port || 3000);
console.log(routes)
app.use(express.json());
Object.keys(routes).forEach((key) => app.use(`/api/v1/${key}`, routes[key]));
module.exports = app;
