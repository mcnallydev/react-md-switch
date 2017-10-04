'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.Input = exports.Div = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 38px;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n'], ['\n  width: 38px;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  display: block;\n  height: 14px;\n  width: 34px;\n  background: #898989;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  &:after {\n    position: absolute;\n  \tleft: -2px;\n  \ttop: -3px;\n  \tdisplay: block;\n  \twidth: 20px;\n  \theight: 20px;\n  \tborder-radius: 100px;\n  \tbackground: #fff;\n  \t    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);\n  \tcontent: \'\';\n  \ttransition: all 0.2s;\n  }\n'], ['\n  position: relative;\n  display: block;\n  height: 14px;\n  width: 34px;\n  background: #898989;\n  border-radius: 100px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  &:after {\n    position: absolute;\n  \tleft: -2px;\n  \ttop: -3px;\n  \tdisplay: block;\n  \twidth: 20px;\n  \theight: 20px;\n  \tborder-radius: 100px;\n  \tbackground: #fff;\n  \t    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);\n  \tcontent: \'\';\n  \ttransition: all 0.2s;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: none;\n  &:checked ~ label {\n    background: #88B6E4;\n    &:after {\n      left: 20px;\n      background: #0C59BB;\n    }\n  }\n  &:disabled ~ label {\n    background: #D5D5D5;\n    pointer-events: none;\n    &:after {\n      background: #BCBDBC;\n    }\n  }\n'], ['\n  display: none;\n  &:checked ~ label {\n    background: #88B6E4;\n    &:after {\n      left: 20px;\n      background: #0C59BB;\n    }\n  }\n  &:disabled ~ label {\n    background: #D5D5D5;\n    pointer-events: none;\n    &:after {\n      background: #BCBDBC;\n    }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject);

var Label = _styledComponents2.default.label(_templateObject2);

var Input = _styledComponents2.default.input(_templateObject3);

exports.Div = Div;
exports.Input = Input;
exports.Label = Label;