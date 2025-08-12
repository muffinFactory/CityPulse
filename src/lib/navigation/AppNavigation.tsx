import { createStackNavigator } from "@react-navigation/stack"

import SplashScreen from "src/screens/SplashScreen"

import AuthNavigation from "./AuthNavigation"
import HomeNavigation from "./HomeNavigation"

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
    </Stack.Navigator>
  )
}

export default AppNavigation
