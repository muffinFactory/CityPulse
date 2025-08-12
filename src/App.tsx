import React from "react"

import AppNavigation from "./lib/navigation/AppNavigation"
import AppProvider from "./lib/provider"

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  )
}

export default App
