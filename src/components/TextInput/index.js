import applyLayout from '../../modules/applyLayout';
import applyNativeMethods from '../../modules/applyNativeMethods';
import createDOMElement from '../../modules/createDOMElement';
import findNodeHandle from '../../modules/findNodeHandle';
import Text from '../Text';
import TextareaAutosize from 'react-textarea-autosize';
import TextInputState from './TextInputState';
import UIManager from '../../apis/UIManager';
import View from '../View';
import { Component, PropTypes } from 'react';
import classnames from 'classnames';

/**
 * React Native events differ from W3C events.
 */
const normalizeEventHandler = (handler) => (e) => {
  if (handler) {
    e.nativeEvent.text = e.target.value;
    return handler(e);
  }
};

/**
 * Determines whether a 'selection' prop differs from a node's existing
 * selection state.
 */
const isSelectionStale = (node, selection) => {
  if (node && selection) {
    const { selectionEnd, selectionStart } = node;
    const { start, end } = selection;
    return start !== selectionStart || end !== selectionEnd;
  }
  return false;
};

/**
 * Certain input types do no support 'selectSelectionRange' and will throw an
 * error.
 */
const setSelection = (node, selection) => {
  try {
    if (isSelectionStale(node, selection)) {
      const { start, end } = selection;
      node.setSelectionRange(start, end || start);
    }
  } catch (e) {}
};

class TextInput extends Component {
  static displayName = 'TextInput';

  static propTypes = {
    ...View.propTypes,
    autoCapitalize: PropTypes.oneOf([ 'characters', 'none', 'sentences', 'words' ]),
    autoComplete: PropTypes.string,
    autoCorrect: PropTypes.bool,
    autoFocus: PropTypes.bool,
    blurOnSubmit: PropTypes.bool,
    clearTextOnFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    editable: PropTypes.bool,
    keyboardType: PropTypes.oneOf([
      'default', 'email-address', 'number-pad', 'numeric', 'phone-pad', 'search', 'url', 'web-search'
    ]),
    maxLength: PropTypes.number,
    maxNumberOfLines: PropTypes.number,
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    onSelectionChange: PropTypes.func,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    selectTextOnFocus: PropTypes.bool,
    selection: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number
    }),
    style: Text.propTypes.style,
    value: PropTypes.string
  };

  static defaultProps = {
    autoCapitalize: 'sentences',
    autoComplete: 'on',
    autoCorrect: true,
    editable: true,
    keyboardType: 'default',
    multiline: false,
    numberOfLines: 2,
    secureTextEntry: false,
    style: {}
  };

  blur() {
    TextInputState.blurTextInput(this._node);
  }

  clear() {
    this._node.value = '';
  }

  focus() {
    TextInputState.focusTextInput(this._node);
  }

  isFocused() {
    return TextInputState.currentlyFocusedField() === this._node;
  }

  setNativeProps(props) {
    UIManager.updateView(this._node, props, this);
  }

  componentDidMount() {
    setSelection(this._node, this.props.selection);
  }

  componentDidUpdate() {
    setSelection(this._node, this.props.selection);
  }

  render() {
    const {
      autoCorrect,
      className,
      editable,
      keyboardType,
      maxNumberOfLines,
      multiline,
      numberOfLines,
      secureTextEntry,
      /* eslint-disable */
      blurOnSubmit,
      clearTextOnFocus,
      dataDetectorTypes,
      enablesReturnKeyAutomatically,
      keyboardAppearance,
      onChangeText,
      onContentSizeChange,
      onEndEditing,
      onLayout,
      onSelectionChange,
      onSubmitEditing,
      placeholderTextColor,
      returnKeyType,
      selection,
      selectionColor,
      selectTextOnFocus,
      /* eslint-enable */
      ...other
    } = this.props;

    let type;

    switch (keyboardType) {
      case 'email-address':
        type = 'email';
        break;
      case 'number-pad':
      case 'numeric':
        type = 'number';
        break;
      case 'phone-pad':
        type = 'tel';
        break;
      case 'search':
      case 'web-search':
        type = 'search';
        break;
      case 'url':
        type = 'url';
        break;
      default:
        type = 'text';
    }

    if (secureTextEntry) {
      type = 'password';
    }

    const component = multiline ? TextareaAutosize : 'input';

    const combinedClassnames = classnames('.rnw-TextInput', className);

    const props = {
      ...other,
      autoCorrect: autoCorrect ? 'on' : 'off',
      className: combinedClassnames,
      onBlur: normalizeEventHandler(this._handleBlur),
      onChange: normalizeEventHandler(this._handleChange),
      onFocus: normalizeEventHandler(this._handleFocus),
      onKeyPress: normalizeEventHandler(this._handleKeyPress),
      onSelect: normalizeEventHandler(this._handleSelectionChange),
      readOnly: !editable,
      ref: this._setNode
    };

    if (multiline) {
      props.maxRows = maxNumberOfLines || numberOfLines;
      props.minRows = numberOfLines;
    } else {
      props.type = type;
    }

    return createDOMElement(component, props);
  }

  _handleBlur = (e) => {
    const { onBlur } = this.props;
    if (onBlur) { onBlur(e); }
  }

  _handleChange = (e) => {
    const { onChange, onChangeText } = this.props;
    const { text } = e.nativeEvent;
    if (onChange) { onChange(e); }
    if (onChangeText) { onChangeText(text); }
  }

  _handleFocus = (e) => {
    const { clearTextOnFocus, onFocus, selectTextOnFocus } = this.props;
    const node = this._node;
    if (onFocus) { onFocus(e); }
    if (clearTextOnFocus) { this.clear(); }
    if (selectTextOnFocus) { node && node.select(); }
  }

  _handleKeyPress = (e) => {
    const { blurOnSubmit, multiline, onKeyPress, onSubmitEditing } = this.props;
    const blurOnSubmitDefault = !multiline;
    const shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;
    if (onKeyPress) { onKeyPress(e); }
    if (!e.isDefaultPrevented() && e.which === 13) {
      if (onSubmitEditing) { onSubmitEditing(e); }
      if (shouldBlurOnSubmit) { this.blur(); }
    }
  }

  _handleSelectionChange = (e) => {
    const { onSelectionChange, selection = {} } = this.props;
    if (onSelectionChange) {
      try {
        const node = e.target;
        if (isSelectionStale(node, selection)) {
          const { selectionStart, selectionEnd } = node;
          e.nativeEvent.selection = { start: selectionStart, end: selectionEnd };
          onSelectionChange(e);
        }
      } catch (e) {}
    }
  }

  _setNode = (component) => {
    this._node = findNodeHandle(component);
  }
}

module.exports = applyLayout(applyNativeMethods(TextInput));
