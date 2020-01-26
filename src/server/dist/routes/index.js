'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _version = require('../bin/version');

var _version2 = _interopRequireDefault(_version);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

/* GET home page. */
router.get('/', function (req, res) {
    res.send('Welcome to AKHomeSensors');
});

router.get('/version', function (req, res) {
    res.json(_version2.default);
});

exports.default = router;
//# sourceMappingURL=index.js.map