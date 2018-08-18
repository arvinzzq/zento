'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var fieldSymbols = {
  FIELD_CUSTOMIZED: hasSymbol ? Symbol.for('field.customized') : 'field.customized',
  FIELD_OPTIONS: hasSymbol ? Symbol.for('field.options') : 'field.options'
};

exports.default = fieldSymbols;