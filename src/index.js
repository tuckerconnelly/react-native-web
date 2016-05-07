// If global.__BUNDLE_START_TIME__ is set, this file is being
// executed from the packager so we're in react-native.
// Otherwise we're either in web or SSRing

if (!global.__BUNDLE_START_TIME__) module.exports = require('./ReactNativeWeb')
else module.exports = require('react-native')
