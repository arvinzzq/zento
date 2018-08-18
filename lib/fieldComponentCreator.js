'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldSymbols = require('./fieldSymbols');

var _fieldSymbols2 = _interopRequireDefault(_fieldSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIELD_CUSTOMIZED = _fieldSymbols2.default.FIELD_CUSTOMIZED,
    FIELD_OPTIONS = _fieldSymbols2.default.FIELD_OPTIONS;


var fieldComponentCreator = function fieldComponentCreator(componentMap, formFieldOptions) {
  return function (type, name) {
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var Component = componentMap[type];
    var props = extra.props;

    if (!Component) {
      throw new Error('Unknown type of component');
    }
    var Field = void 0;
    switch (Component.formFieldType) {
      case FIELD_OPTIONS:
        if (!formFieldOptions[name]) {
          throw new Error('No field option is found');
        }
        Field = _react2.default.createElement(Component, _extends({}, props, { name: name, options: formFieldOptions[name] }));
        break;
      case FIELD_CUSTOMIZED:
      default:
        Field = _react2.default.createElement(Component, _extends({}, props, { name: name }));
        break;
      // do nothing
    }
    return Field;
  };
};

exports.default = fieldComponentCreator;