import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NavigationProp, RouteProp } from "@react-navigation/native"

import { LocationEventType } from "src/model/event"

export type CommonNavigation = {
  Splash: undefined
  NotFound: undefined
  ErrorPage: undefined
}

export type AuthNavigatorParams = CommonNavigation & {
  SignIn: undefined
  SignUp: undefined
}

export type HomeNavigatorParams = {
  Home: undefined
  Profile: undefined
  UserPanel: undefined
}

export type AppNavigationParams = CommonNavigation & {
  SplashScreen: undefined
  HomeNavigation: undefined
  AuthNavigation: undefined
  Event: {
    event?: LocationEventType
  }
}

export type AuthNavigation = NavigationProp<AuthNavigatorParams>

export type MainAppNavigation = NavigationProp<AppNavigationParams>

export type HomeNavigationScreen<RouteName extends keyof HomeNavigatorParams> = BottomTabScreenProps<
  HomeNavigatorParams,
  RouteName
>

export type AppScreen<RouteName extends keyof AppNavigationParams> = {
  route: RouteProp<AppNavigationParams, RouteName>
  navigation: MainAppNavigation
}
// {
//   route:
//   navigation: MainAppNavigation
// }
