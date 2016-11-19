import Animated from 'animated'
import debounce from 'lodash/debounce'

import AppRegistry from '../AppRegistry'
import StyleSheet from '../StyleSheet'
import Image from '../Image'
import Text from '../Text'
import View from '../Components/View'

function _traverse(internalInstance, visitor) {
  visitor(internalInstance)
  if (internalInstance._renderedComponent) {
    _traverse(internalInstance._renderedComponent, visitor)
  }
  if (internalInstance._renderedChildren) {
    Object.keys(internalInstance._renderedChildren).forEach(
      childKey => _traverse(internalInstance._renderedChildren[childKey], visitor)
    )
  }
}

const callOnLayout = debounce(() => {
  if (!AppRegistry.getAppElement()) return
  _traverse(AppRegistry.getAppElement()._reactInternalInstance, ({ _instance }) =>
    _instance && _instance.handleLayout && _instance.handleLayout()
  )
}, 100)

Animated.inject.InteractionManager({
  createInteractionHandle: () => 0,
  clearInteractionHandle: callOnLayout,
})

Animated.inject.FlattenStyle(StyleSheet.flatten)

module.exports = {
  ...Animated,
  Image: Animated.createAnimatedComponent(Image),
  Text: Animated.createAnimatedComponent(Text),
  View: Animated.createAnimatedComponent(View)
}
