import React, { createContext, ReactNode } from "react"

import { NavigationContainer } from "@react-navigation/native"

// type PossibleScreen = keyof HomeNavigatorParams

export interface NavigationContextType {
  // TODO: if we want to add universal nav (404, error, etc, insert here)
}

export const NavigationContext = createContext<NavigationContextType>({})

const NavProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  // TODO: Insert universal navigation here
  return <NavigationContext.Provider value={{}}>{children}</NavigationContext.Provider>
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
