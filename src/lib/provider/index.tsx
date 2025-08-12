import React, { ReactNode } from "react"

import NavigationProvider from "./NavigationProvider"
import QueryClientProvider from "./QueryClientProvider"
import SafeAreaProvider from "./SafeAreaProvider"

type AppProviderProps = {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <QueryClientProvider>
    <SafeAreaProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
)

export default AppProvider
