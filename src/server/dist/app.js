'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _temperature = require('./routes/temperature');

var _temperature2 = _interopRequireDefault(_temperature);

var _mongo = require('./connections/mongo');

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mongo2.default)();

var app = (0, _express2.default)();

app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({
    extended: false
}));
app.use((0, _cookieParser2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/', _index2.default);
app.use('/temp', _temperature2.default);
app.use('/users', _users2.default);

exports.default = app;
//# sourceMappingURL=app.js.map