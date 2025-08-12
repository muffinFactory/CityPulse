import React from "react"
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

import { useBottomWindowPadding } from "src/hooks/layout/useBottomWindowPadding"
import { useAppTheme } from "src/hooks/useAppTheming"

type Props = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  fullscreen?: boolean
}

const BaseScrollViewScreen = ({ style, children, fullscreen }: Props) => {
  const bottomSpace = useBottomWindowPadding()
  const insets = useSafeAreaInsets()
  const Theme = useAppTheme()

  return (
    <View style={styles.container}>
      {!fullscreen && <View style={{ height: insets.top, width: "100%", backgroundColor: Theme.statusBarColor }} />}
      <ScrollView style={[styles.container, { paddingBottom: bottomSpace, backgroundColor: Theme.background }, style]}>
        {children}
      </ScrollView>
    </View>
  )
}

export default BaseScrollViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
