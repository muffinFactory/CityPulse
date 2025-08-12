import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { useAppTheme } from "src/hooks/useAppTheming"
import HomeScreen from "src/screens/Home"
import ProfileScreen from "src/screens/Profile"
import UserPanelScreen from "src/screens/UserPanel"

import { HomeNavigatorParams } from "../routes/type"

const Tab = createBottomTabNavigator<HomeNavigatorParams>()

const HomeNavigation = () => {
  const Theme = useAppTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Theme.primary,
        tabBarInactiveTintColor: Theme.textColor3,
        tabBarStyle: { backgroundColor: Theme.background, borderTopWidth: 1 },
        headerStyle: { backgroundColor: Theme.primary },
        headerTintColor: Theme.background
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="UserPanel" component={UserPanelScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigation
