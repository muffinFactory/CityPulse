import React, { ReactNode } from "react"

import NavigationProvider from "./NavigationProvider"
import QueryClientProvider from "./QueryClientProvider"
import SafeAreaProvider from "./SafeAreaProvider"
import { AppThemeProvider } from "./ThemeProvider"

type AppProviderProps = {
  children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <QueryClientProvider>
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </AppThemeProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
)

export default AppProvider
