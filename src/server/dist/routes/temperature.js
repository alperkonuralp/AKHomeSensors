'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _temperature = require('../model/temperature');

var _temperature2 = _interopRequireDefault(_temperature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/* GET home page. */
router.get('/', function (req, res, next) {

    _temperature2.default.find().then(function (todos) {
        res.json(todos);
    }).catch(function (err) {
        res.json(err);
    });
});

exports.default = router;
//# sourceMappingURL=temperature.js.map