import React from "react"
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const BaseScrollViewScreen = ({ style, children }: Props) => {
  const bottomSpace = useBottomWindowPadding()

  return <ScrollView style={[styles.container, { paddingBottom: bottomSpace }, style]}>{children}</ScrollView>
}

export default BaseScrollViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
