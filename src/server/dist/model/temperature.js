"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var temperatureSchema = new _mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    roomName: {
        type: String,
        required: true,
        index: true
    },
    hic: {
        type: Number,
        required: true
    },
    hif: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    temperatureC: {
        type: Number,
        required: true
    },
    temperatureF: {
        type: Number,
        required: true
    }
});

temperatureSchema.index({
    roomName: 1,
    dateTime: -1
});

exports.default = (0, _mongoose.model)("Temperature", temperatureSchema);
//# sourceMappingURL=temperature.js.map