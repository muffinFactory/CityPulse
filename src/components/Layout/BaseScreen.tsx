import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"
import { useAppTheme } from "src/hooks/useAppTheming"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  fullscreen?: boolean
}

const BaseScreen = ({ style, children, fullscreen }: Props) => {
  const bottomSpace = useBottomWindowPadding()
  const insets = useSafeAreaInsets()
  const Theme = useAppTheme()

  return (
    <View style={styles.container}>
      {!fullscreen && <View style={{ height: insets.top, width: "100%", backgroundColor: Theme.statusBarColor }} />}
      <View
        style={[
          styles.container,
          { paddingBottom: fullscreen ? undefined : bottomSpace, backgroundColor: Theme.background },
          style
        ]}
      >
        {children}
      </View>
    </View>
  )
}

export default BaseScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
