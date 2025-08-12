import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const BaseScreen = ({ style, children }: Props) => {
  const bottomSpace = useBottomWindowPadding()

  return <View style={[styles.container, { paddingBottom: bottomSpace }, style]}>{children}</View>
}

export default BaseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
