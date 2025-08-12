import React, { ReactNode } from "react"

import { SafeAreaProvider as RNSafeAreaProvider } from "react-native-safe-area-context"

type SafeAreaProviderProps = {
  children: ReactNode
}

const SafeAreaProvider: React.FC<SafeAreaProviderProps> = ({ children }) => (
  <RNSafeAreaProvider>{children}</RNSafeAreaProvider>
)

export default SafeAreaProvider
