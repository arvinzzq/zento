'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _formElementMap = require('./formElementMap');

var _formElementMap2 = _interopRequireDefault(_formElementMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormCreator = function () {
  function FormCreator(options) {
    _classCallCheck(this, FormCreator);

    this.formFieldRender = options.formFieldRender;
  }

  /**
  * Recursive render form element to create full form element
  * @param {Array} configs form config used to create form
  * @param {Function} bindField bindField that is relatived to form-kit
  * @param {Array} activeIndexes actived indexes that are used to decide which subform should be displayed
  */


  _createClass(FormCreator, [{
    key: 'create',
    value: function create(configs, bindField, activeIndexes) {
      var _this = this;

      if (configs && !(configs instanceof Array)) {
        throw new Error('Configs must be array');
      }
      // why does this lost here ~ ?
      return configs.map(function (config, index) {
        return (0, _formElementMap2.default)(_this.create.bind(_this), _this.formFieldRender, bindField)[config.type](config, {
          index: index,
          activeIndexes: activeIndexes,
          len: configs.length
        });
      });
    }
  }]);

  return FormCreator;
}();

;

exports.default = FormCreator;