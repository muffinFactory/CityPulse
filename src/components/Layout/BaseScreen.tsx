import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"
import { useAppTheme } from "src/hooks/useAppTheming"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  fullscreen?: boolean
}

const BaseScreen = ({ style, children, fullscreen }: Props) => {
  const bottomSpace = useBottomWindowPadding()
  const Theme = useAppTheme()

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: fullscreen ? undefined : bottomSpace, backgroundColor: Theme.background },
        style
      ]}
    >
      {children}
    </View>
  )
}

export default BaseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
