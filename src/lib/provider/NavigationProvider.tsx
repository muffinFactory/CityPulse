import React, { createContext, ReactNode, useCallback } from "react"

import { NavigationContainer } from "@react-navigation/native"

import useAppNavigation from "src/hooks/navigation/useAppNavigation"
import { EventItemResponse } from "src/model/event"

// type PossibleScreen = keyof HomeNavigatorParams

export interface NavigationContextType {
  // TODO: if we want to add universal nav (404, error, etc, insert here)
  goToAuth: () => void
  goToEvent: (event: EventItemResponse) => void
}

export const NavigationContext = createContext<NavigationContextType>({ goToAuth: () => {}, goToEvent: () => {} })

const NavProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const navigation = useAppNavigation()

  // TODO: Insert universal navigation here
  const goToAuth = useCallback(() => {
    navigation.navigate("AuthNavigation", {
      screen: "SignIn",
      params: { enableBack: true }
    })
  }, [navigation])
  const goToEvent = useCallback(
    (event: EventItemResponse) => {
      navigation.navigate("Event", { event: event })
    },
    [navigation]
  )

  return <NavigationContext.Provider value={{ goToAuth, goToEvent }}>{children}</NavigationContext.Provider>
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
