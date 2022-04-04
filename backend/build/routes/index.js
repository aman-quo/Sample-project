"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./userRoute"));

var _profileRoute = _interopRequireDefault(require("./profileRoute"));

var _searchRoute = _interopRequireDefault(require("./searchRoute"));

var _contactRoute = _interopRequireDefault(require("./contactRoute"));

var router = _express["default"].Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _userRoute["default"]);
  router.use('/profiles', _profileRoute["default"]);
  router.use('/searches', _searchRoute["default"]);
  router.use('/contacts', _contactRoute["default"]);
  return router;
};

var _default = routes;
exports["default"] = _default;