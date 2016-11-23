# React Native for Web

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
![gzipped size](https://img.shields.io/badge/gzipped-~41.0k-blue.svg)

[React Native][react-native-url] components and APIs for the Web.

Browser support: Chrome, Firefox, Safari >= 7, IE 10, Edge.

## How this fork differs

- Adds support for `onLayout`
- Reduces CSS footprint dramatically by using classes instead of inline styles
- Adds support for `NativeModules`
- Adds support for `Linking`
- Adds support for `Platform.select`
- Matches scrollEvent.nativeEvent to react-native's
- [Source code organization](https://github.com/tuckerconnelly/react-native-web/tree/master/src/Libraries) maps 1:1 with [React Native repo](https://github.com/facebook/react-native/tree/master/Libraries)
- Bunch of other little fixes

The setup is a little different. Make sure your `index.web.js` looks something this:

```js
import React from 'react'
import { render } from 'react-dom'
import { AppRegistry, BaseStyles } from 'react-native-web'

import App from './src/index'

const app = render(
  <App>
    <BaseStyles />
  </App>,
  document.getElementById('root')
)
AppRegistry.registerComponent('client', app)
```

`<BaseStyles />` is a stylesheet with css classes for `View`, `<Image />`, etc.

`AppRegister.registerComponent` is what allows `onLayout` to work.

Then make sure you have a `web/index.js` file in your repo that might look something like this:

```js
const { RCTCamera, CameraManager } = require('react-native-camera/web')
const { RCTVideo } = require('react-native-video/web')

module.exports = {
  registerComponents: register => {
    register('RCTCamera', RCTCamera)
    register('RCTVideo', RCTVideo)
  },
  nativeModules: {
    CameraManager,
  },
}
```

This is where native modules are registered. Of course, you can leave `registerComponents` and `nativeModules` blank if you don't want to register any NativeModules, but they need to be there for this fork to start (much like your `android/` and `ios/` folders need to be there :) )

I've forked a couple react-native repos to add web NativeModules:

- [tuckerconnelly/react-native-video](https://github.com/tuckerconnelly/react-native-video)
- [tuckerconnelly/react-native-camera](https://github.com/tuckerconnelly/react-native-camera)

For a working example project, check out [carbon-ui-docs](https://github.com/tuckerconnelly/carbon-ui-docs)

## Overview

"React Native for Web" is a project to bring React Native's building blocks and
touch handling to the Web.

React Native provides a foundational layer to support interoperable,
zero-configuration React component development. This is missing from React's
web ecosystem where OSS components rely on inline styles (usually without
vendor prefixes), or require build tool configuration. This project allows
components built upon React Native to be run on the Web, and it manages all
component styling out-of-the-box.

For example, the [`View`](docs/apis/View.md) component makes it easy to build
cross-browser layouts with flexbox, such as stacked and nested boxes with
margin and padding. And the [`StyleSheet`](docs/guides/style.md) API converts
styles defined in JavaScript into "Atomic CSS".

## Quick start

To install in your app:

```
npm install --save react@0.14 react-dom@0.14 react-native-web
```

Read the [Client and Server rendering](docs/guides/rendering.md) guide.

## Examples

Demos:

* [React Native for Web: Playground](http://codepen.io/necolas/pen/PZzwBR).
* [TicTacToe](http://codepen.io/necolas/full/eJaLZd/)
* [2048](http://codepen.io/necolas/full/wMVvxj/)

Sample:

```js
import React, { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
const App = () => (
  <Card>
    <Title>App Card</Title>
    <Photo uri="/some-photo.jpg" />
  </Card>
)

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
})

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('react-root') })
```

## Documentation

Guides:

* [Accessibility](docs/guides/accessibility.md)
* [Client and server rendering](docs/guides/rendering.md)
* [Direct manipulation](docs/guides/direct-manipulation.md)
* [Known issues](docs/guides/known-issues.md)
* [React Native](docs/guides/react-native.md)
* [Style](docs/guides/style.md)

Exported modules:

* Components
  * [`ActivityIndicator`](docs/components/ActivityIndicator.md)
  * [`Image`](docs/components/Image.md)
  * [`ListView`](docs/components/ListView.md)
  * [`Portal`](docs/components/Portal.md)
  * [`ScrollView`](docs/components/ScrollView.md)
  * [`Text`](docs/components/Text.md)
  * [`TextInput`](docs/components/TextInput.md)
  * [`TouchableHighlight`](http://facebook.github.io/react-native/releases/0.22/docs/touchablehighlight.html) (mirrors React Native)
  * [`TouchableOpacity`](http://facebook.github.io/react-native/releases/0.22/docs/touchableopacity.html) (mirrors React Native)
  * [`TouchableWithoutFeedback`](docs/components/TouchableWithoutFeedback.md)
  * [`View`](docs/components/View.md)
* APIs
  * [`Animated`](http://facebook.github.io/react-native/releases/0.20/docs/animated.html) (mirrors React Native)
  * [`AppRegistry`](docs/apis/AppRegistry.md)
  * [`AppState`](docs/apis/AppState.md)
  * [`AsyncStorage`](docs/apis/AsyncStorage.md)
  * [`Dimensions`](docs/apis/Dimensions.md)
  * [`NativeMethods`](docs/apis/NativeMethods.md)
  * [`NetInfo`](docs/apis/NetInfo.md)
  * [`PanResponder`](http://facebook.github.io/react-native/releases/0.20/docs/panresponder.html#content) (mirrors React Native)
  * [`PixelRatio`](docs/apis/PixelRatio.md)
  * [`Platform`](docs/apis/Platform.md)
  * [`StyleSheet`](docs/apis/StyleSheet.md)

## License

React Native for Web is [BSD licensed](LICENSE).

[npm-image]: https://badge.fury.io/js/react-native-web.svg
[npm-url]: https://npmjs.org/package/react-native-web
[react-native-url]: https://facebook.github.io/react-native/
[travis-image]: https://travis-ci.org/necolas/react-native-web.svg?branch=master
[travis-url]: https://travis-ci.org/necolas/react-native-web
