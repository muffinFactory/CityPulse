import React, { createContext, ReactNode, useCallback } from "react"

import { NavigationContainer } from "@react-navigation/native"

import useAppNavigation from "src/hooks/navigation/useAppNavigation"

// type PossibleScreen = keyof HomeNavigatorParams

export interface NavigationContextType {
  // TODO: if we want to add universal nav (404, error, etc, insert here)
  goToAuth: () => void
}

export const NavigationContext = createContext<NavigationContextType>({ goToAuth: () => {} })

const NavProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigation = useAppNavigation()

  // TODO: Insert universal navigation here
  const goToAuth = useCallback(() => {
    navigation.navigate("AuthNavigation", {
      screen: "SignIn",
      params: { enableBack: true }
    })
  }, [navigation])

  return <NavigationContext.Provider value={{ goToAuth }}>{children}</NavigationContext.Provider>
}

type NavigationProviderProps = {
  children: ReactNode
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  return (
    <NavigationContainer>
      <NavProvider>{children}</NavProvider>
    </NavigationContainer>
  )
}

export default NavigationProvider
