import Ionicons, { IoniconsIconName } from "@react-native-vector-icons/ionicons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { useAppTheme } from "src/hooks/useAppTheming"
import { useUserInfo } from "src/hooks/useUserInfo"
import HomeScreen from "src/screens/Home"
import ProfileScreen from "src/screens/Profile"
import UserPanelScreen from "src/screens/UserPanel"

import { HomeNavigatorParams } from "../routes/type"

const Tab = createBottomTabNavigator<HomeNavigatorParams>()

const HomeNavigation = () => {
  const Theme = useAppTheme()
  const userInfo = useUserInfo()

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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => TabBarIcon("home", color) }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => TabBarIcon("person", color) }}
      />
      {!userInfo?.isGuest && (
        <Tab.Screen
          name="UserPanel"
          component={UserPanelScreen}
          options={{ tabBarIcon: ({ color }) => TabBarIcon("settings", color) }}
        />
      )}
    </Tab.Navigator>
  )
}

const TabBarIcon = (name: IoniconsIconName, color: string) => <Ionicons name={name} size={24} color={color} />

export default HomeNavigation
