import { useEffect } from "react"
import { Text } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
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
    <BaseScreen>
      <Text>SplashScreen</Text>
    </BaseScreen>
  )
}

export default AppSplashScreen
