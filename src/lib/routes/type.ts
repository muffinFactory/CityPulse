import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NavigationProp, NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import { StackScreenProps } from "@react-navigation/stack"

import { LocationEventType } from "src/model/event"

export type CommonNavigation = {
  Splash: undefined
  NotFound: undefined
  ErrorPage: undefined
}

export type AuthNavigatorParams = CommonNavigation & {
  SignIn: { enableBack?: boolean }
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
  AuthNavigation: NavigatorScreenParams<AuthNavigatorParams>
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

export type AuthNavigationScreen<RouteName extends keyof AuthNavigatorParams> = StackScreenProps<
  AuthNavigatorParams,
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
