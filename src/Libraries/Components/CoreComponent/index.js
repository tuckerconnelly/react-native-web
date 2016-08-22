import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import debounce from 'lodash/debounce'

import NativeMethodsDecorator from '../../../modules/NativeMethodsDecorator'
import StyleSheet from '../../StyleSheet'

const roleComponents = {
  article: 'article',
  banner: 'header',
  button: 'button',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  heading: 'h1',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
}

@NativeMethodsDecorator
class CoreComponent extends Component {
  static propTypes = {
    accessibilityLabel: PropTypes.string,
    accessibilityLiveRegion: PropTypes.oneOf(['assertive', 'off', 'polite']),
    accessibilityRole: PropTypes.string,
    accessible: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onLayout: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    testID: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    accessible: true,
    component: 'div'
  };

  componentDidMount() {
    this.handleLayout()
  }

  handleLayout = debounce(() => {
    const { onLayout } = this.props

    // isMounted comes from NativeMethodsDecorator
    if (!onLayout || !this._isMounted) return
    const {
      offsetLeft: x,
      offsetTop: y,
      offsetWidth: width,
      offsetHeight: height,
    } = ReactDOM.findDOMNode(this)
    setTimeout(() => onLayout({ nativeEvent: { layout: { width, height, x, y } } }))
  }, 20)

  render() {
    const {
      accessibilityLabel,
      accessibilityLiveRegion,
      accessibilityRole,
      accessible,
      component,
      testID,
      type,
      ...other
    } = this.props

    const Component = roleComponents[accessibilityRole] || component

    delete other.onLayout

    return (
      <Component
        {...other}
        {...StyleSheet.resolve(other)}
        aria-hidden={accessible ? null : true}
        aria-label={accessibilityLabel}
        aria-live={accessibilityLiveRegion}
        data-testid={testID}
        role={accessibilityRole}
        type={accessibilityRole === 'button' ? 'button' : type}
      />
    )
  }
}

module.exports = CoreComponent
