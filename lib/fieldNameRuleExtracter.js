'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _traverser = require('./traverser');

var _traverser2 = _interopRequireDefault(_traverser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var traverser = new _traverser2.default();

var fieldNameRuleExtracter = function fieldNameRuleExtracter(fieldInitValueMap) {
  return function (infoFormConfig) {
    var fieldNames = {};
    var fieldRules = {};
    traverser.dfs(infoFormConfig).filter(function (item) {
      return item.type === 'field';
    }).forEach(function (field) {
      fieldNames[field.name] = fieldInitValueMap[field.fieldType] || '';
      fieldRules[field.name] = field.rule;
    });
    return {
      fieldNames: fieldNames,
      fieldRules: fieldRules
    };
  };
};

exports.default = fieldNameRuleExtracter;