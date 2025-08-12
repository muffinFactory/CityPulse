import { forwardRef } from "react"
import { TextInput, TextInputProps } from "react-native"

// TODO RTL support
const BaseTextInput = forwardRef<TextInput, TextInputProps>(({ style, ...props }, ref) => {
  return <TextInput ref={ref} style={[style]} {...props} />
})

BaseTextInput.displayName = "TextInput"

export default BaseTextInput
