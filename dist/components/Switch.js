'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({
        checked: !_this.state.checked
      }, function () {
        _this.props.onChange(e, _this.state.checked, _this.props.id);
      });
    };

    _this.state = {
      id: props.id,
      checked: props.checked
    };
    return _this;
  }

  /**
   * React Component componentWillReceiveProps.
   * @param  {Object} nextProps
   */


  _createClass(Switch, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        checked: nextProps.checked
      });
    }

    /**
     * OnChange method to set checked state
     * @return {[type]} [description]
     */

  }, {
    key: 'render',


    /**
     * React render.
     * @returns {XML}
     */
    value: function render() {
      return _react2.default.createElement(
        _style.Div,
        null,
        _react2.default.createElement(_style.Input, {
          type: 'checkbox',
          id: this.props.id,
          onChange: this.onChange,
          checked: this.state.checked
        }),
        _react2.default.createElement(_style.Label, {
          htmlFor: this.props.id
        })
      );
    }
  }]);

  return Switch;
}(_react.Component);

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */


Switch.propTypes = {
  id: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func
};

exports.default = Switch;