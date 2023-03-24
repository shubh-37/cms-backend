const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const logger = require("morgan");
const mongoose = require("mongoose");
const util = require("util");
const fs = require("fs");
const fsReaddir = util.promisify(fs.readdir);
const _ = require("lodash");
const { MONGODB_CONNECTION_URI, PORT } = process.env;
const location = path.join(__dirname, "./models");
var cors = require("cors");

function beautifyFileName(fileName) {
  const newFileName = fileName
    .replace(".js", "") //organisation
    .split("-") // new-org // ['new', 'org']
    .map((fragment) => _.capitalize(fragment)) // ['New', 'Org']
    .join(""); // 'NewOrg'
  return newFileName;
}

async function databaseInit() {
  const Models = {};
  const connection = await mongoose.connect(MONGODB_CONNECTION_URI, { autoIndex: true, useNewUrlParser: true });
  console.log("Successfully Connected with Database");
  const allFiles = await fsReaddir(location, { withFileTypes: true });
  allFiles.forEach((file) => {
    // convert to a Model friendly file name
    const ModelName = beautifyFileName(file.name);
    const Model = require(`${location}/${file.name}`);
    Models[ModelName] = connection.model(ModelName, Model);
  });
  return { connection, Models };
}

var whitelist = ["http://localhost:8080", "http://localhost:8081"];
var corsOptions = {
  origin: function (origin, callback) {
    console.log({ origin });
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

async function initApp() {
  const { connection, Models } = await databaseInit();
  const indexRouter = require("./routes/index")(connection, Models);
  const offerPageRouter = require("./routes/offer")(connection, Models);
  const app = express();
  app.use(cors(corsOptions));
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "public")));

  app.use("/api", indexRouter);
  app.use("/api/Offers", offerPageRouter);
  app.set("port", PORT);

  return app;
}

module.exports = { initApp, databaseInit };
