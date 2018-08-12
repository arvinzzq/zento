'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var FIELD_CUSTOMIZED = hasSymbol ? Symbol.for('field.customized') : 'field.customized';
var FIELD_OPTIONS = hasSymbol ? Symbol.for('field.options') : 'field.options';

exports.FIELD_CUSTOMIZED = FIELD_CUSTOMIZED;
exports.FIELD_OPTIONS = FIELD_OPTIONS;