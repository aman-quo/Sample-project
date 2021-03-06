"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProfile = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var ProfileServices = _interopRequireWildcard(require("../services/profile.service"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Controller to create a new profile
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
var addProfile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var id, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.user.id;
            _context.next = 4;
            return ProfileServices.addProfile(req.body, id);

          case 4:
            data = _context.sent;

            if (!(data === 'Profile already exist')) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(_httpStatusCodes["default"].CONFLICT).json({
              code: _httpStatusCodes["default"].CONFLICT,
              message: 'Profile already exist',
              data: data
            }));

          case 7:
            return _context.abrupt("return", res.status(_httpStatusCodes["default"].CREATED).json({
              code: _httpStatusCodes["default"].CREATED,
              data: data,
              message: 'Profile created successfully'
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            next(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function addProfile(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.addProfile = addProfile;