import { useEffect } from "react"
import { Text, View } from "react-native"

import useAppNavigation from "src/hooks/navigation/useAppNavigation"

const AppSplashScreen = () => {
  const navigation = useAppNavigation()

  // TODO: existing user check and auth

  useEffect(() => {
    // TODO hide splashscreen

    setTimeout(() => {
      navigation.navigate("HomeNavigation")
    }, 5000)
  }, [navigation])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default AppSplashScreen
