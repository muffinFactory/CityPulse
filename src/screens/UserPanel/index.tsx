import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { HomeNavigationScreen } from "src/lib/routes/type"

const UserPanelScreen: FC<HomeNavigationScreen<"UserPanel">> = ({}) => {
  return (
    <BaseScreen fullscreen>
      <View>
        <Text>UserPanelScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default UserPanelScreen
