import React from "react"

// TODO: moment declaration, use the other library next for dating stuff
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import moment from "moment"

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
