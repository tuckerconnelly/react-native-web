'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('style', {
    dangerouslySetInnerHTML: { __html: '\n      html {\n        width: 100%;\n        height: 100%;\n      }\n\n      body {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n      }\n\n      #root {\n        width 100%;\n        height: 100%;\n        flex: 1;\n      }\n      \n      .rnw-Image-initial {\n        align-self: flex-start;\n\n        background-color: transparent;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n\n      .rnw-Image {\n        max-width: 100%;\n        max-height: 100%;\n        height: auto;\n        border-width: 0;\n\n        opacity: 0;\n      }\n\n      .rnw-Image-children {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n      }\n\n      .rnw-Image-contain {\n        background-size: contain;\n      }\n\n      .rnw-Image-cover: {\n        background-size: cover;\n      }\n\n      .rnw-Image-none: {\n        background-size: auto;\n      }\n\n      .rnw-Image-stretch: {\n        background-size: 100% 100%;\n      }\n\n      .rnw-Text {\n        display: inline;\n        padding: 0;\n        margin: 0;\n\n        color: inherit;\n        font: inherit;\n        text-decoration-line: none;\n        word-wrap: break-word;\n      }\n\n      .rnw-Text-singleLineStyle {\n        max-width: 100%;\n\n        text-overflow: ellipsis;\n        white-space: nowrap;\n\n        overflow: hidden;\n      }\n\n      .rnw-View {\n        position: relative;\n\n        display: flex;\n        box-sizing: border-box;\n        min-height: 0;\n        min-width: 0;\n        padding: 0;\n        margin: 0;\n        border-width: 0;\n        border-style: solid;\n        outline: none;\n        align-items: stretch;\n        flex-basis: auto;\n        flex-shrink: 0;\n        flex-direction: column;\n\n        font: inherit;\n        color: inherit;\n        text-align: inherit;\n        text-decoration-line: none;\n\n        background-color: transparent;\n\n        list-style: none;\n      }\n\n      .rnw-TextInput-wrapper {\n        flex-grow: 1;\n      }\n\n      .rnw-TextInput {\n        appearance: none;\n        flex-grow: 1;\n        padding: 0;\n        border-width: 0;\n        outline: none;\n        box-sizing: border-box;\n\n        color: inherit;\n        font: inherit;\n\n        z-index: 1;\n\n        background-color: transparent;\n      }\n\n      .rnw-TextInput-placeholder {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n\n        justify-content: center;\n      }\n\n      .rnw-TextInput-placeholderText {\n        color: darkgray;\n        overflow: hidden;\n        white-space: pre;\n      }\n    ' }
  });
};