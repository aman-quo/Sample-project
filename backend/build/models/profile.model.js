"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  DOB: {
    type: String
  },
  interests: {
    type: String
  },
  location: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Profile', userSchema);

exports["default"] = _default;