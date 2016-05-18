import classNames from 'classnames'

/* global window */
import NativeMethodsDecorator from '../../modules/NativeMethodsDecorator'
import resolveAssetSource from './resolveAssetSource'
import CoreComponent from '../CoreComponent'
import ImageResizeMode from './ImageResizeMode'
import React, { Component, PropTypes } from 'react'
import StyleSheet from '../../apis/StyleSheet'
import View from '../View'

const STATUS_ERRORED = 'ERRORED'
const STATUS_LOADED = 'LOADED'
const STATUS_LOADING = 'LOADING'
const STATUS_PENDING = 'PENDING'
const STATUS_IDLE = 'IDLE'

const ImageSourcePropType = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  PropTypes.string
])

@NativeMethodsDecorator
class Image extends Component {
  static propTypes = {
    accessibilityLabel: CoreComponent.propTypes.accessibilityLabel,
    accessible: CoreComponent.propTypes.accessible,
    children: PropTypes.any,
    className: PropTypes.string,
    defaultSource: ImageSourcePropType,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    onLoadEnd: PropTypes.func,
    onLoadStart: PropTypes.func,
    resizeMode: PropTypes.oneOf(['contain', 'cover', 'none', 'stretch']),
    source: ImageSourcePropType,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    testID: CoreComponent.propTypes.testID
  };

  static defaultProps = {
    accessible: true,
    style: {}
  };

  static resizeMode = ImageResizeMode;

  constructor(props, context) {
    super(props, context)
    const uri = resolveAssetSource(props.source)
    // state
    this.state = { status: uri ? STATUS_PENDING : STATUS_IDLE }
    // autobinding
    this._onError = this._onError.bind(this)
    this._onLoad = this._onLoad.bind(this)
  }

  componentDidMount() {
    if (this.state.status === STATUS_PENDING) {
      this._createImageLoader()
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextUri = resolveAssetSource(nextProps.source)
    if (resolveAssetSource(this.props.source) !== nextUri) {
      this.setState({
        status: nextUri ? STATUS_PENDING : STATUS_IDLE
      })
    }
  }

  componentDidUpdate() {
    if (this.state.status === STATUS_PENDING && !this.image) {
      this._createImageLoader()
    }
  }

  componentWillUnmount() {
    this._destroyImageLoader()
  }

  _createImageLoader() {
    const uri = resolveAssetSource(this.props.source)

    this._destroyImageLoader()
    this.image = new window.Image()
    this.image.onerror = this._onError
    this.image.onload = this._onLoad
    this.image.src = uri
    this._onLoadStart()
  }

  _destroyImageLoader() {
    if (this.image) {
      this.image.onerror = null
      this.image.onload = null
      this.image = null
    }
  }

  _onError(e) {
    const { onError } = this.props
    const event = { nativeEvent: e }

    this._destroyImageLoader()
    this.setState({ status: STATUS_ERRORED })
    this._onLoadEnd()
    if (onError) onError(event)
  }

  _onLoad(e) {
    const { onLoad } = this.props
    const event = { nativeEvent: e }

    this._destroyImageLoader()
    this.setState({ status: STATUS_LOADED })
    if (onLoad) onLoad(event)
    this._onLoadEnd()
  }

  _onLoadEnd() {
    const { onLoadEnd } = this.props
    if (onLoadEnd) onLoadEnd()
  }

  _onLoadStart() {
    const { onLoadStart } = this.props
    this.setState({ status: STATUS_LOADING })
    if (onLoadStart) onLoadStart()
  }

  render() {
    const {
      accessibilityLabel,
      accessible,
      children,
      className,
      defaultSource,
      source,
      testID
    } = this.props

    const isLoaded = this.state.status === STATUS_LOADED
    const displayImage = resolveAssetSource(!isLoaded ? defaultSource : source)
    const backgroundImage = displayImage ? `url("${displayImage}")` : null
    const style = StyleSheet.flatten(this.props.style)

    const resizeMode = this.props.resizeMode || style.resizeMode || ImageResizeMode.cover
    // remove resizeMode style, as it is not supported by View
    delete style.resizeMode

    /**
     * Image is a non-stretching View. The image is displayed as a background
     * image to support `resizeMode`. The HTML image is hidden but used to
     * provide the correct responsive image dimensions, and to support the
     * image context menu. Child content is rendered into an element absolutely
     * positioned over the image.
     */
    return (
      <View
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="img"
        accessible={accessible}
        className={classNames('rnw-Image-initial', className)}
        style={[
          backgroundImage && { backgroundImage },
          resizeModeStyles[resizeMode],
          style
        ]}
        testID={testID}
      >
        <img className="rnw-Image" src={displayImage} role="presentation" />
        {children ? (
          <View
            children={children}
            className="rnw-Image-children"
            pointerEvents="box-none"
          />
        ) : null}
      </View>
    )
  }
}

const resizeModeStyles = StyleSheet.create({
  contain: {
    backgroundSize: 'contain'
  },
  cover: {
    backgroundSize: 'cover'
  },
  none: {
    backgroundSize: 'auto'
  },
  stretch: {
    backgroundSize: '100% 100%'
  }
})

module.exports = Image
