import React from "react"
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native"

import Ionicons, { IoniconsIconName } from "@react-native-vector-icons/ionicons"

import { useAppTheme } from "src/hooks/useAppTheming"

type BaseButtonProps = TouchableOpacityProps & {
  iconName?: IoniconsIconName
  iconStyle?: {
    size: number
    color: ColorValue
  }
  text?: string
  textStyle?: StyleProp<TextStyle>
  children?: React.ReactNode
}

/**
 * AppButton
 *
 * A themed button with optional Ionicons icon.
 *
 * Example usage:
 * ```ts
 * <AppButton
 *   text="Log In"
 *   iconName="log-in-outline"
 *   onPress={() => console.log("Login pressed")}
 * />
 * ```
 */
const AppButton: React.FC<BaseButtonProps> = props => {
  // BaseButton already taken by gesture handle :v
  // Later-Do: Maybe handle if we want Text first and then button?
  const { text, textStyle, style, iconName, iconStyle, children, ...touchableProps } = props
  const Theme = useAppTheme()

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: Theme.primary }, style]} {...touchableProps}>
      {iconName && (
        <Ionicons name={iconName} color={iconStyle?.color || Theme.textColorOverPrimary} size={iconStyle?.size || 24} />
      )}
      {!!text && <Text style={[styles.buttonText, { color: Theme.textColorOverPrimary }, textStyle]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
})

export default AppButton
