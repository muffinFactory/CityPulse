import { forwardRef } from "react"
import { I18nManager, TextInput, TextInputProps } from "react-native"

const BaseTextInput = forwardRef<TextInput, TextInputProps>(({ style, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      style={[style, { textAlign: I18nManager.isRTL ? "right" : "left" }]}
      {...props}
      textAlign={I18nManager.isRTL ? "right" : "left"}
    />
  )
})

BaseTextInput.displayName = "TextInput"

export default BaseTextInput
