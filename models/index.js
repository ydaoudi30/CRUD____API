const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.chickenrun = require("./chickenrun.model.js")(mongoose);
db.farm = require("./farm.model.js")(mongoose);

module.exports = db;
