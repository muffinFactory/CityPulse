import React from "react"
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"
import { useAppTheme } from "src/hooks/useAppTheming"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const BaseScrollViewScreen = ({ style, children }: Props) => {
  const bottomSpace = useBottomWindowPadding()
  const Theme = useAppTheme()

  return (
    <ScrollView style={[styles.container, { paddingBottom: bottomSpace, backgroundColor: Theme.primary }, style]}>
      {children}
    </ScrollView>
  )
}

export default BaseScrollViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
