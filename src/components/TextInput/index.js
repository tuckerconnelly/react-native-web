import NativeMethodsDecorator from '../../modules/NativeMethodsDecorator'
import CoreComponent from '../CoreComponent'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import StyleSheet from '../../apis/StyleSheet'
import Text from '../Text'
import TextareaAutosize from 'react-textarea-autosize'
import TextInputState from './TextInputState'
import View from '../View'

@NativeMethodsDecorator
class TextInput extends Component {
  static propTypes = {
    ...View.propTypes,
    autoComplete: PropTypes.bool,
    autoFocus: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    clearTextOnFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    editable: PropTypes.bool,
    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'url']),
    maxLength: PropTypes.number,
    maxNumberOfLines: PropTypes.number,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onSelectionChange: PropTypes.func,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    selectTextOnFocus: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    testID: CoreComponent.propTypes.testID,
    value: PropTypes.string
  };

  static defaultProps = {
    editable: true,
    keyboardType: 'default',
    multiline: false,
    numberOfLines: 2,
    secureTextEntry: false,
    style: {}
  };

  constructor(props, context) {
    super(props, context)
    this.state = { showPlaceholder: !props.value && !props.defaultValue }
  }

  setNativeProps(props) {
    this.refs.input.setNativeProps(props)
  }

  blur = () => {
    TextInputState.blurTextInput(ReactDOM.findDOMNode(this.refs.input))
  }

  clear = () => {
    this.setNativeProps({ text: '' })
  }

  focus = () => {
    TextInputState.focusTextInput(ReactDOM.findDOMNode(this.refs.input))
  }

  _onBlur(e) {
    const { onBlur } = this.props
    const text = e.target.value
    this.setState({ showPlaceholder: text === '' })
    this.blur()
    if (onBlur) onBlur(e)
  }

  _onChange(e) {
    const { onChange, onChangeText } = this.props
    const text = e.target.value
    this.setState({ showPlaceholder: text === '' })
    if (onChange) onChange(e)
    if (onChangeText) onChangeText(text)
    if (!this.refs.input) {
      // calling `this.props.onChange` or `this.props.onChangeText`
      // may clean up the input itself. Exits here.
      return
    }
  }

  _onFocus(e) {
    const { clearTextOnFocus, onFocus, selectTextOnFocus } = this.props
    const node = ReactDOM.findDOMNode(this.refs.input)
    const text = e.target.value
    this.focus()
    if (onFocus) onFocus(e)
    if (clearTextOnFocus) this.clear()
    if (selectTextOnFocus) node.select()
    this.setState({ showPlaceholder: text === '' })
  }

  _onSelectionChange(e) {
    const { onSelectionChange } = this.props
    const { selectionDirection, selectionEnd, selectionStart } = e.target
    const event = {
      selectionDirection,
      selectionEnd,
      selectionStart,
      nativeEvent: e.nativeEvent
    }
    if (onSelectionChange) onSelectionChange(event)
  }

  render() {
    const {
      /* eslint-disable react/prop-types */
      accessibilityLabel,
      /* eslint-enable react/prop-types */
      autoComplete,
      autoFocus,
      children,
      className,
      defaultValue,
      editable,
      keyboardType,
      maxLength,
      maxNumberOfLines,
      multiline,
      numberOfLines,
      onSelectionChange,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      style,
      testID,
      value
    } = this.props

    let type

    switch (keyboardType) {
      case 'email-address':
        type = 'email'
        break
      case 'numeric':
        type = 'number'
        break
      case 'phone-pad':
        type = 'tel'
        break
      case 'search':
      case 'web-search':
        type = 'search'
        break
      case 'url':
        type = 'url'
        break
    }

    if (secureTextEntry) {
      type = 'password'
    }

    const propsCommon = {
      autoComplete: autoComplete && 'on',
      autoFocus,
      className: 'rnw-TextInput',
      defaultValue,
      maxLength,
      onBlur: this._onBlur.bind(this),
      onChange: this._onChange.bind(this),
      onFocus: this._onFocus.bind(this),
      onSelect: onSelectionChange && this._onSelectionChange.bind(this),
      readOnly: !editable,
      value
    }

    const propsMultiline = {
      ...propsCommon,
      component: TextareaAutosize,
      maxRows: maxNumberOfLines || numberOfLines,
      minRows: numberOfLines
    }

    const propsSingleline = {
      ...propsCommon,
      component: 'input',
      type
    }

    const props = multiline ? propsMultiline : propsSingleline

    return (
      <View
        accessibilityLabel={accessibilityLabel}
        className={className}
        style={style}
        testID={testID}
      >
        <View className="rnw-TextInput-wrapper">
          <CoreComponent {...props} style={styles.input} ref="input" />
          {placeholder && this.state.showPlaceholder && <View
            className="rnw-TextInput-placeholder"
            pointerEvents="none"
          >
            <Text
              className="rnw-TextInput-placeholderText"
              style={
                placeholderTextColor && { color: placeholderTextColor }
              }
            >
              {placeholder}
            </Text>
          </View>}
        </View>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    textAlign: 'inherit'
  },
})

module.exports = TextInput
