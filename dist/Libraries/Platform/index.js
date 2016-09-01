'use strict';

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var Platform = {
  OS: 'web',
  userAgent: _ExecutionEnvironment.canUseDOM ? window.navigator.userAgent : ''
};

module.exports = Platform;