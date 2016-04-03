/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * @flow
 */

const lifecycleMethods = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'componentShouldUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
]

import NativeMethodsMixin from '../NativeMethodsMixin'

const NativeMethodsDecorator = (Component) => {
  Object.keys(NativeMethodsMixin).forEach((method) => {
    if (!Component.prototype[method]) {
      Component.prototype[method] = NativeMethodsMixin[method]
    } else if (lifecycleMethods.indexOf(method) !== -1) {
      const currentMethod = Component.prototype[method]
      Component.prototype[method] = function () {
        currentMethod.call(this)
        NativeMethodsMixin[method].call(this)
      }
    }
  })
  return Component
}

module.exports = NativeMethodsDecorator
