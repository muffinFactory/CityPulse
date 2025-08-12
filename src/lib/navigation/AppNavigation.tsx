import { createStackNavigator } from "@react-navigation/stack"

import EventScreen from "src/screens/Event"
import AppSplashScreen from "src/screens/Splash"

import AuthNavigation from "./AuthNavigation"
import HomeNavigation from "./HomeNavigation"
import { AppNavigationParams } from "../routes/type"

const Stack = createStackNavigator<AppNavigationParams>()

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SplashScreen" component={AppSplashScreen} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
