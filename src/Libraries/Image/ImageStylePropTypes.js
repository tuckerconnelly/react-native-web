import { PropTypes } from 'react'
import ColorPropType from '../StyleSheet/ColorPropType'
import LayoutPropTypes from '../StyleSheet/LayoutPropTypes'
import TransformPropTypes from '../StyleSheet/TransformPropTypes'
import ImageResizeMode from './ImageResizeMode'

const hiddenOrVisible = PropTypes.oneOf(['hidden', 'visible'])

module.exports = {
  ...LayoutPropTypes,
  ...TransformPropTypes,
  backfaceVisibility: hiddenOrVisible,
  backgroundColor: ColorPropType,
  resizeMode: PropTypes.oneOf(Object.keys(ImageResizeMode)),
  /**
   * @platform web
   */
  boxShadow: PropTypes.string,
  opacity: PropTypes.number,
  overflow: hiddenOrVisible,
  /**
   * @platform web
   */
  visibility: hiddenOrVisible
}
