import { useEffect } from "react"
import { Text } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import useAppNavigation from "src/hooks/navigation/useAppNavigation"

const SplashScreen = () => {
  const navigation = useAppNavigation()

  useEffect(() => {
    // TODO hide splashscreen
    setTimeout(() => {
      navigation.navigate("Home")
    }, 5000)
  }, [navigation])

  return (
    <BaseScreen>
      <Text>SplashScreen</Text>
    </BaseScreen>
  )
}

export default SplashScreen
