import { Platform } from "react-native"

import { initialWindowMetrics, useSafeAreaInsets } from "react-native-safe-area-context"

export const useBottomWindowPadding = (extraPadding = 0) => {
  const { bottom } = useSafeAreaInsets()

  const bottomSpace = Platform.select({
    ios: Math.max(bottom, initialWindowMetrics?.insets?.bottom || 40),
    //usually 48, but use 50 as default as different phones may have anomalies
    android: Math.max(bottom, initialWindowMetrics?.insets?.bottom || 50),
    default: bottom
  })

  return bottomSpace + extraPadding
}
