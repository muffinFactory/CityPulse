import { FC } from "react"

import BaseScreen from "src/components/Layout/BaseScreen"
import PromptAuthSection from "src/Fragment/PromptAuthSection"
import { useUserInfo } from "src/hooks/useUserInfo"
import { HomeNavigationScreen } from "src/lib/routes/type"

const ProfileScreen: FC<HomeNavigationScreen<"Profile">> = ({}) => {
  const userInfo = useUserInfo()

  if (userInfo.isGuest)
    return (
      <BaseScreen fullscreen style={{ justifyContent: "center", alignItems: "center" }}>
        <PromptAuthSection />
      </BaseScreen>
    )

  return (
    <BaseScreen fullscreen>
      <></>
      {/* TODO basic userprofile */}
      {/* TODO list favorited items */}
    </BaseScreen>
  )
}

export default ProfileScreen
