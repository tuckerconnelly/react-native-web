'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  openURL: function openURL(url) {
    window.open(url);
  },
  canOpenUrl: function canOpenUrl() {
    return true;
  },
  getInitialUrl: function getInitialUrl() {
    return '';
  }
};