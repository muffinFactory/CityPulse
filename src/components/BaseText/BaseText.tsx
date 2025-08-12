import { forwardRef } from "react"
import { Text, TextProps } from "react-native"

interface BaseTextProps extends TextProps {}

// TODO: RTL
const BaseText = forwardRef<Text, BaseTextProps>(({ style, children, ...textProps }, ref) => {
  return (
    <Text ref={ref} style={[{ includeFontPadding: false }, style]} {...textProps}>
      {children}
    </Text>
  )
})

BaseText.displayName = "BaseText"

// export const AnimatedBaseText = Animated.createAnimatedComponent(BaseText)
export default BaseText

// export { BaseTextInput } from "./BaseTextInput"
