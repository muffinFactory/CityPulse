import React, { useCallback } from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"

import Ionicons from "@react-native-vector-icons/ionicons"

import useAppNavigation from "src/hooks/navigation/useAppNavigation"
import { useAppTheme } from "src/hooks/useAppTheming"

import { BaseText } from "../BaseText"

type ScreenHeaderProps = {
  title: string
  onBack?: boolean | (() => void)
  rightComponent?: React.ReactNode
}

export default function ScreenHeader({ title, onBack, rightComponent }: ScreenHeaderProps) {
  const navigation = useAppNavigation()
  const Theme = useAppTheme()

  const backButtonEnabled = typeof onBack === "function" || onBack === true
  const handleBackPress = useCallback(() => {
    if (typeof onBack === "function") {
      onBack()
    } else if (onBack === true) {
      navigation.goBack()
    }
  }, [onBack, navigation])

  return (
    <View style={[styles.container, { backgroundColor: Theme.primary }]}>
      <View style={styles.left}>
        {backButtonEnabled && (
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={Theme.textColorOverPrimary} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.center}>
        <BaseText numberOfLines={1} style={[styles.title, { color: Theme.textColorOverPrimary }]}>
          {title}
        </BaseText>
      </View>

      <View style={styles.right}>{rightComponent}</View>
    </View>
  )
}

const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
    paddingHorizontal: 16
  },
  left: {
    width: 50,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  backButton: {
    padding: 8
  },
  backText: {
    fontSize: 24,
    color: "#007AFF"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000"
  },
  right: {
    width: 50,
    justifyContent: "center",
    alignItems: "flex-end"
  }
})
