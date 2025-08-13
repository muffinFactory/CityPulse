import { useContext } from "react"

import { NavigationContext, type NavigationContextType } from "src/lib/provider/NavigationProvider"

/**
 * Navigation hook to access universal screens (404, error, etc)
 */
const useAppNavigationContext = () => {
  const context = useContext<NavigationContextType>(NavigationContext)

  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationProvider")
  }

  return context as NavigationContextType
}

export default useAppNavigationContext
