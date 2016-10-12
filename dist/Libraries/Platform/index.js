'use strict';

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

function select(platformCode) {
  if (typeof platformCode.web === 'function') return platformCode.web();

  return platformCode.web;
}

var Platform = {
  OS: 'web',
  userAgent: _ExecutionEnvironment.canUseDOM ? window.navigator.userAgent : '',
  select: select
};

module.exports = Platform;