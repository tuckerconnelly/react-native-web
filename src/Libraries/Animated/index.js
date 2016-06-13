/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * @flow
 */

import AnimatedImplementation from './AnimatedImplementation'
import Image from '../Image'
import Text from '../Text'
import View from '../Components/View'

module.exports = {
  ...AnimatedImplementation,
  View: AnimatedImplementation.createAnimatedComponent(View),
  Text: AnimatedImplementation.createAnimatedComponent(Text),
  Image: AnimatedImplementation.createAnimatedComponent(Image)
}
