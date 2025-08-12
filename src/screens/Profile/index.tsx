import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { HomeNavigationScreen } from "src/lib/routes/type"

const ProfileScreen: FC<HomeNavigationScreen<"Profile">> = ({}) => {
  return (
    <BaseScreen fullscreen>
      <View>
        <Text>ProfileScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default ProfileScreen
