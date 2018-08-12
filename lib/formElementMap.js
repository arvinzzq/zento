'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formElementMap = function formElementMap(renderSubForm, renderFormField, bindField) {
  return {
    subForm: function subForm(config, options) {
      var index = options.index,
          activeIndexes = options.activeIndexes;
      var children = config.children,
          description = config.description,
          style = config.style,
          className = config.className;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          key: index,
          style: _extends({
            boxSizing: 'border-box',
            paddingTop: 35,
            display: activeIndexes.indexOf(index) === -1 ? 'none' : 'block'
          }, style)
        },
        _react2.default.createElement(
          'pre',
          { style: { fontSize: 12, lineHeight: '18px', color: '#666' } },
          description
        ),
        _react2.default.createElement(
          'div',
          { style: { boxSizing: 'border-box' } },
          renderSubForm(children, bindField)
        )
      );
    },
    section: function section(config, options) {
      var index = options.index;
      var children = config.children,
          title = config.title,
          style = config.style,
          className = config.className;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          key: index,
          style: _extends({
            boxSizing: 'border-box',
            marginTop: 30
          }, style)
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              display: title ? 'block' : 'none',
              fontSize: 16,
              color: '#333',
              fontWeight: 'bold',
              paddingLeft: 10,
              borderLeft: '3px solid #38f',
              marginBottom: 20
            }
          },
          title
        ),
        renderSubForm(children, bindField)
      );
    },
    formRow: function formRow(config) {
      var children = config.children,
          key = config.key,
          style = config.style,
          className = config.className;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          key: key,
          style: _extends({
            boxSizing: 'border-box'
          }, style)
        },
        renderSubForm(children, bindField)
      );
    },
    field: function field(config, options) {
      var len = options.len;
      var name = config.name,
          style = config.style;

      return _react2.default.createElement(
        'div',
        {
          key: name,
          style: _extends({
            boxSizing: 'border-box',
            height: 60,
            width: 100 / len + '%',
            display: 'inline-block'
          }, style)
        },
        renderFormField(bindField, config)
      );
    }
  };
};

exports.default = formElementMap;