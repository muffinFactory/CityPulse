import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import EventScreen from "src/screens/Event"
import HomeScreen from "src/screens/Home"
import ProfileScreen from "src/screens/Profile"

import { HomeNavigatorParams } from "../routes/type"

const Tab = createBottomTabNavigator<HomeNavigatorParams>()

function HomeNavigation() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Event" component={EventScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigation
