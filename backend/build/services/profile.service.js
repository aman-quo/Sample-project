"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProfile = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _profile = _interopRequireDefault(require("../models/profile.model"));

//create new profile
var addProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body, id) {
    var profileExist, userData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _profile["default"].findOne({
              userId: id
            });

          case 2:
            profileExist = _context.sent;

            if (!profileExist) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", 'Profile already exist');

          case 7:
            userData = {
              userId: id,
              name: body.name,
              DOB: body.DOB,
              interests: body.interests,
              location: body.location
            };
            return _context.abrupt("return", _profile["default"].create(userData));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addProfile(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addProfile = addProfile;