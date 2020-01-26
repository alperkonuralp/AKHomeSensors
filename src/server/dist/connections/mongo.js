"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    (0, _mongoose.connect)("mongodb://127.0.0.1:27017/AKHomeSensorsApp", {
        useNewUrlParser: true,
        appname: "AKHomeSensorsWebApi",
        useUnifiedTopology: true
    });

    _mongoose.connection.on('open', function () {
        console.log('MongoDB: Connected');
    });
    _mongoose.connection.on('error', function (err) {
        console.log('MongoDB: Error', err);
    });

    _mongoose2.default.Promise = global.Promise;
};
//# sourceMappingURL=mongo.js.map