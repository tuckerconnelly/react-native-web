import React from 'react'

import './Libraries/PanResponder/injectResponderEventPlugin'

// apis
import Animated from './Libraries/Animated'
import AppRegistry from './Libraries/AppRegistry'
import AppState from './Libraries/AppState'
import AsyncStorage from './Libraries/AsyncStorage'
import Dimensions from './Libraries/Dimensions'
import Easing from './Libraries/Easing'
import InteractionManager from './Libraries/InteractionManager'
import NetInfo from './Libraries/NetInfo'
import PanResponder from './Libraries/PanResponder'
import PixelRatio from './Libraries/PixelRatio'
import Platform from './Libraries/Platform'
import StyleSheet from './Libraries/StyleSheet'
import UIManager from './Libraries/UIManager'

// components
import CoreComponent from './Libraries/Components/CoreComponent'
import ActivityIndicator from './Libraries/Components/ActivityIndicator'
import Image from './Libraries/Image'
import ListView from './Libraries/Components/ListView'
import Portal from './Libraries/Components/Portal'
import ScrollView from './Libraries/Components/ScrollView'
import Text from './Libraries/Text'
import TextInput from './Libraries/Components/TextInput'
import Touchable from './Libraries/Components/Touchable/Touchable'
import TouchableBounce from './Libraries/Components/Touchable/TouchableBounce'
import TouchableHighlight from './Libraries/Components/Touchable/TouchableHighlight'
import TouchableOpacity from './Libraries/Components/Touchable/TouchableOpacity'
import TouchableWithoutFeedback from './Libraries/Components/Touchable/TouchableWithoutFeedback'
import View from './Libraries/Components/View'

// modules
import NativeModules from './modules/NativeModules'

// propTypes

import ColorPropType from './Libraries/StyleSheet/ColorPropType'
import EdgeInsetsPropType from './Libraries/StyleSheet/EdgeInsetsPropType'
import PointPropType from './Libraries/StyleSheet/PointPropType'

// other
import BaseStyles from './Libraries/Components/BaseStyles'

const ReactNative = {
  // apis
  Animated,
  AppRegistry,
  AppState,
  AsyncStorage,
  Dimensions,
  Easing,
  InteractionManager,
  NetInfo,
  PanResponder,
  PixelRatio,
  Platform,
  StyleSheet,
  UIManager,

  // components
  CoreComponent,
  ActivityIndicator,
  Image,
  ListView,
  Portal,
  ScrollView,
  Text,
  TextInput,
  Touchable,
  TouchableBounce,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,

  // modules
  NativeModules,

  // propTypes
  ColorPropType,
  EdgeInsetsPropType,
  PointPropType,

  // other
  BaseStyles,

  // React
  ...React
}

module.exports = ReactNative
