import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { ScreenOptionsType } from "src/lib/routes/type"

const ProfileScreen: FC<ScreenOptionsType<"Profile">> = ({}) => {
  return (
    <BaseScreen>
      <View>
        <Text>ProfileScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default ProfileScreen
