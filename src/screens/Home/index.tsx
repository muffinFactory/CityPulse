import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { ScreenOptionsType } from "src/lib/routes/type"

const HomeScreen: FC<ScreenOptionsType<"Home">> = () => {
  return (
    <BaseScreen>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default HomeScreen
