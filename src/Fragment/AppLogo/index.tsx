import React from "react"
import { DimensionValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native"

interface AppLogoProps {
  size?: DimensionValue // e.g. 50 or "20%"
  style?: StyleProp<ViewStyle>
}

export const AppLogo: React.FC<AppLogoProps> = ({ size = 50, style }) => {
  return <View style={[styles.circle, { width: size, height: size }, style]} />
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "black",
    borderRadius: 999
  }
})
