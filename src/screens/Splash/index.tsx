import { useEffect } from "react"
import { View } from "react-native"

import { BaseText } from "src/components/BaseText"
import { AppLogo } from "src/Fragment/AppLogo"
import useLocalUser from "src/hooks/auth/useLocalUser"
import useAppNavigation from "src/hooks/navigation/useAppNavigation"
import { useAppTheme } from "src/hooks/useAppTheming"
import useAppTranslation from "src/hooks/useAppTranslation"

// Maybe-Do: consider react-native-splashscreen for consistent splashscreen later
const AppSplashScreen = () => {
  const navigation = useAppNavigation()
  const Theme = useAppTheme()
  const { t } = useAppTranslation()

  const { isLoading, setupLocalUser } = useLocalUser()

  useEffect(() => {
    setTimeout(() => {
      setupLocalUser()
    }, 250)
  }, [setupLocalUser])

  useEffect(() => {
    if (isLoading) return
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeNavigation" }]
      })
    }, 250)
  }, [isLoading, navigation])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Theme.primary }}>
      <AppLogo style={{ marginBottom: 8 }} />
      <BaseText style={{ color: Theme.textColorOverPrimary, fontSize: 36 }}>{t("CityPulse")}</BaseText>
    </View>
  )
}

export default AppSplashScreen
