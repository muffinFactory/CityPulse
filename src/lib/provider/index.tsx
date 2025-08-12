import React, { ReactNode } from "react"

import LanguageProvider from "./LanguageProvider"
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
      <LanguageProvider>
        <AppThemeProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </AppThemeProvider>
      </LanguageProvider>
    </SafeAreaProvider>
  </QueryClientProvider>
)

export default AppProvider
