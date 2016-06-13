import classNames from 'classnames'

import NativeMethodsDecorator from '../../modules/NativeMethodsDecorator'
import CoreComponent from '../Components/CoreComponent'
import React, { Component, PropTypes } from 'react'

@NativeMethodsDecorator
class Text extends Component {
  static propTypes = {
    accessibilityLabel: CoreComponent.propTypes.accessibilityLabel,
    accessibilityRole: CoreComponent.propTypes.accessibilityRole,
    accessible: CoreComponent.propTypes.accessible,
    children: PropTypes.any,
    className: PropTypes.string,
    numberOfLines: PropTypes.number,
    onPress: PropTypes.func,
    testID: CoreComponent.propTypes.testID
  };

  static defaultProps = {
    accessible: true
  };

  _onPress(e) {
    if (this.props.onPress) this.props.onPress(e)
  }

  render() {
    const {
      className,
      numberOfLines,
      onPress,
      ...other
    } = this.props

    return (
      <CoreComponent
        {...other}
        className={classNames(
          'rnw-Text',
          className,
          numberOfLines === 1 && 'rnw-Text-singleLineStyle'
        )}
        component="span"
        onClick={this._onPress.bind(this)}
      />
    )
  }
}

module.exports = Text
