import { FC } from "react"
import { View } from "react-native"

import { BaseText } from "src/components/BaseText"
import BaseScreen from "src/components/Layout/BaseScreen"
import ListEvents from "src/Fragment/ListEvents"
import PromptAuthSection from "src/Fragment/PromptAuthSection"
import useAppNavigationContext from "src/hooks/navigation/useAppNavigationContext"
import { useAppTheme } from "src/hooks/useAppTheming"
import useAppTranslation from "src/hooks/useAppTranslation"
import { useUserFavoriteEvents, useUserInfo } from "src/hooks/useUserInfo"
import { HomeNavigationScreen } from "src/lib/routes/type"
import { capitalize } from "src/util/string"

import styles from "./styles"

const ProfileScreen: FC<HomeNavigationScreen<"Profile">> = ({}) => {
  const userInfo = useUserInfo()
  const Theme = useAppTheme()
  const { t } = useAppTranslation()
  const { goToAuth } = useAppNavigationContext()
  const userFavoriteEvents = useUserFavoriteEvents()

  if (userInfo.isGuest)
    return (
      <BaseScreen fullscreen style={{ justifyContent: "center", alignItems: "center" }}>
        <PromptAuthSection onLogin={goToAuth} />
      </BaseScreen>
    )

  return (
    <BaseScreen fullscreen>
      <View style={styles.header}>
        <BaseText style={styles.headerText}>
          {capitalize(t("welcomeUser", { name: userInfo?.name || "Guest" }))}
        </BaseText>
      </View>
      <View style={styles.profileBody}>
        <ProfileHeaderText text="What is your name?" />
        <ProfileValueText text={capitalize(t("myNameIs", { name: userInfo?.name || "King Arthur" }))} />
        <ProfileHeaderText text="What is your quest?" />
        <ProfileValueText text={userInfo?.quest} />
        <ProfileHeaderText text="What is your favorite color?" />
        <ProfileValueText text={userInfo?.favoriteColor} />
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 16, marginVertical: 10 }}>
        <BaseText style={{ color: Theme.primary, fontSize: 20, fontWeight: "500" }}>Favorite Items</BaseText>
      </View>
      <ListEvents dataList={userFavoriteEvents} />
    </BaseScreen>
  )
}

const ProfileHeaderText = ({ text = "" }: { text?: string }) => {
  const Theme = useAppTheme()

  return (
    <View style={{ flexDirection: "row", marginHorizontal: 16, marginVertical: 10 }}>
      <BaseText style={{ color: Theme.secondary, fontSize: 20, fontWeight: "500" }}>{text}</BaseText>
    </View>
  )
}

const ProfileValueText = ({ text = "" }: { text?: string }) => {
  const Theme = useAppTheme()

  return (
    <View style={{ flexDirection: "row", marginHorizontal: 16, marginVertical: 10 }}>
      <BaseText style={{ color: Theme.primary, fontSize: 18, fontWeight: "500" }}>{text}</BaseText>
    </View>
  )
}
export default ProfileScreen
