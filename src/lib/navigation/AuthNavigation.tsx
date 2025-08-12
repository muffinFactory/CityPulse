import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import SignInScreen from "src/screens/SignIn"
import SignUpScreen from "src/screens/SignUp"

import { AuthNavigatorParams } from "../routes/type"

const Tab = createBottomTabNavigator<AuthNavigatorParams>()

function AuthNavigation() {
  return (
    <Tab.Navigator initialRouteName="SignIn">
      <Tab.Screen name="SignIn" component={SignInScreen} />
      <Tab.Screen name="SignUp" component={SignUpScreen} />
      {/* <Tab.Screen name='ErrorPage' component={ErrorScreen} /> */}
      {/* <Tab.Screen name='NotFound' component={NotFoundScreen} /> */}
    </Tab.Navigator>
  )
}

export default AuthNavigation
