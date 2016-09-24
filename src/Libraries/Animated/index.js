import Animated from 'animated'
import Image from '../Image'
import StyleSheet from '../StyleSheet'
import Text from '../Text'
import View from '../Components/View'

Animated.inject.FlattenStyle(StyleSheet.flatten)

module.exports = {
  ...Animated,
  Image: Animated.createAnimatedComponent(Image),
  Text: Animated.createAnimatedComponent(Text),
  View: Animated.createAnimatedComponent(View)
}
