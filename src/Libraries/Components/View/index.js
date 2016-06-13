import classNames from 'classnames'
import { debounce } from 'lodash'

import NativeMethodsDecorator from '../../../modules/NativeMethodsDecorator'
import normalizeNativeEvent from '../../PanResponder/normalizeNativeEvent'
import CoreComponent from '../CoreComponent'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

@NativeMethodsDecorator
class View extends Component {
  static propTypes = {
    accessibilityLabel: CoreComponent.propTypes.accessibilityLabel,
    accessibilityLiveRegion: CoreComponent.propTypes.accessibilityLiveRegion,
    accessibilityRole: CoreComponent.propTypes.accessibilityRole,
    accessible: CoreComponent.propTypes.accessible,
    children: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClickCapture: PropTypes.func,
    onLayout: PropTypes.func,
    onMoveShouldSetResponder: PropTypes.func,
    onMoveShouldSetResponderCapture: PropTypes.func,
    onResponderGrant: PropTypes.func,
    onResponderMove: PropTypes.func,
    onResponderReject: PropTypes.func,
    onResponderRelease: PropTypes.func,
    onResponderTerminate: PropTypes.func,
    onResponderTerminationRequest: PropTypes.func,
    onStartShouldSetResponder: PropTypes.func,
    onStartShouldSetResponderCapture: PropTypes.func,
    onTouchCancel: PropTypes.func,
    onTouchCancelCapture: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchEndCapture: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchMoveCapture: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchStartCapture: PropTypes.func,
    pointerEvents: PropTypes.oneOf(['auto', 'box-none', 'box-only', 'none']),
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    testID: CoreComponent.propTypes.testID
  };

  static defaultProps = {
    accessible: true,
    style: {}
  };

  constructor(props, context) {
    super(props, context)
    this._normalizeEventForHandler = this._normalizeEventForHandler.bind(this)
  }

  componentDidMount() {
    this.handleLayout()
  }

  // This isn't working--after a compnent updates, it doesn't get called.
  // Animated components are constantly updated though, so causes a huge performance
  // dip if you call this on didUpdate.

  handleLayout = debounce(() => {
    const { onLayout } = this.props
    if (!onLayout) return
    const {
      offsetLeft: x,
      offsetTop: y,
      offsetWidth: width,
      offsetHeight: height,
    } = ReactDOM.findDOMNode(this)
    setTimeout(() => onLayout({ nativeEvent: { layout: { width, height, x, y } } }))
  }, 20)

  /**
   * React Native expects `pageX` and `pageY` to be on the `nativeEvent`, but
   * React doesn't include them for touch events.
   */
  _normalizeEventForHandler(handler) {
    return (e) => {
      const { pageX } = e.nativeEvent
      if (pageX === undefined) {
        e.nativeEvent = normalizeNativeEvent(e.nativeEvent)
      }
      handler && handler(e)
    }
  }

  render() {
    const {
      className,
      pointerEvents,
      style,
      ...other
    } = this.props

    const pointerEventsStyle = pointerEvents && { pointerEvents }

    return (
      <CoreComponent
        {...other}
        ref="view"
        className={classNames('rnw-View', className)}
        onClick={this._handleClick}
        onClickCapture={this._normalizeEventForHandler(this.props.onClickCapture)}
        onTouchCancel={this._normalizeEventForHandler(this.props.onTouchCancel)}
        onTouchCancelCapture={this._normalizeEventForHandler(this.props.onTouchCancelCapture)}
        onTouchEnd={this._normalizeEventForHandler(this.props.onTouchEnd)}
        onTouchEndCapture={this._normalizeEventForHandler(this.props.onTouchEndCapture)}
        onTouchMove={this._normalizeEventForHandler(this.props.onTouchMove)}
        onTouchMoveCapture={this._normalizeEventForHandler(this.props.onTouchMoveCapture)}
        onTouchStart={this._normalizeEventForHandler(this.props.onTouchStart)}
        onTouchStartCapture={this._normalizeEventForHandler(this.props.onTouchStartCapture)}
        style={[
          style,
          pointerEventsStyle
        ]}
      />
    )
  }
}

module.exports = View
