import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "src/screens/Home"
import ProfileScreen from "src/screens/Profile"
import UserPanelScreen from "src/screens/UserPanel"

import { HomeNavigatorParams } from "../routes/type"

const Tab = createBottomTabNavigator<HomeNavigatorParams>()

const HomeNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="UserPanel" component={UserPanelScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigation
