import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NavigationProp } from "@react-navigation/native"

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

export type HomeNavigatorParams = CommonNavigation & {
  Home: undefined
  Profile: undefined
  Event: LocationEventType
}

export type AuthNavigation = NavigationProp<AuthNavigatorParams>

export type MainAppNavigation = NavigationProp<HomeNavigatorParams>

export type ScreenOptionsType<RouteName extends keyof HomeNavigatorParams> = BottomTabScreenProps<
  HomeNavigatorParams,
  RouteName,
  "MainAppNavigation"
>
// {
//   route:
//   navigation: MainAppNavigation
// }
