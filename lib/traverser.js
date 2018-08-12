'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noop = function noop() {};

/**
 * Traverser class used to traverse tree like data by bfs or dfs search
 * @param {String} [childrenName='children'] alias of subtree that used for traverse
 * @param {Function} [callback=noop] callback function invoked on each traversed node with parameters node data
 * @return {Array} collected array of result of traverser, and callback invoked result of each traversed node
 */

var Traverser = function () {
  function Traverser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Traverser);

    var _options$childrenName = options.childrenName,
        childrenName = _options$childrenName === undefined ? 'children' : _options$childrenName,
        _options$callback = options.callback,
        callback = _options$callback === undefined ? noop : _options$callback;

    this.childrenName = childrenName;
    this.callback = callback;
  }

  _createClass(Traverser, [{
    key: '_dfs',
    value: function _dfs(treeData, dfsResult) {
      var _this = this;

      if (treeData && !(treeData instanceof Array)) {
        throw new Error('Tree and subtree must be array');
      } else if (treeData) {
        treeData.forEach(function (node) {
          _this.callback(node);
          dfsResult.push(node);
          _this._dfs(node[_this.childrenName], dfsResult);
        });
      }
    }
  }, {
    key: 'dfs',
    value: function dfs(treeData) {
      var dfsResult = [];
      this._dfs(treeData, dfsResult);
      return dfsResult;
    }
  }, {
    key: '_bfs',
    value: function _bfs(treeData, bfsResult) {
      if (treeData && !(treeData instanceof Array)) {
        throw new Error('Tree root must be array');
      } else if (treeData) {
        var queue = [].concat(_toConsumableArray(treeData));
        while (queue.length) {
          var node = queue.shift();
          this.callback(node);
          bfsResult.push(node);
          queue = queue.concat(node[this.childrenName] || []);
        }
      }
    }
  }, {
    key: 'bfs',
    value: function bfs(treeData) {
      var bfsResult = [];
      this._bfs(treeData, bfsResult);
      return bfsResult;
    }
  }]);

  return Traverser;
}();

exports.default = Traverser;