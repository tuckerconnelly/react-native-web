import TextInputState from '../../Libraries/Components/TextInput/TextInputState'

const dismissKeyboard = () => {
  TextInputState.blurTextInput(TextInputState.currentlyFocusedField())
}

module.exports = dismissKeyboard
