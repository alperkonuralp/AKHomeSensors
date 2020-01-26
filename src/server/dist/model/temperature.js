"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var temperatureSchema = new _mongoose.Schema({
    dateTime: String,
    roomName: String,
    hic: Number,
    hif: Number,
    humidity: Number,
    temperature: Number
});

exports.default = (0, _mongoose.model)("temperature", temperatureSchema);
//# sourceMappingURL=temperature.js.map