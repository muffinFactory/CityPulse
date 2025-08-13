import { createStackNavigator } from "@react-navigation/stack"

import SignInScreen from "src/screens/SignIn"
import SignUpScreen from "src/screens/SignUp"

import { AuthNavigatorParams } from "../routes/type"

const Stack = createStackNavigator<AuthNavigatorParams>()

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      {/* <Tab.Screen name='ErrorPage' component={ErrorScreen} /> */}
      {/* <Tab.Screen name='NotFound' component={NotFoundScreen} /> */}
    </Stack.Navigator>
  )
}

export default AuthNavigation
