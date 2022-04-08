"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var profileSchema = _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  interests: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Profile = _mongoose["default"].model('profiles', profileSchema);

var _default = Profile;
exports["default"] = _default;