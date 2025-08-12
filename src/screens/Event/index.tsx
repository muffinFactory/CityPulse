import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { ScreenOptionsType } from "src/lib/routes/type"

const EventScreen: FC<ScreenOptionsType<"Event">> = ({}) => {
  return (
    <BaseScreen>
      <View>
        <Text>EventScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default EventScreen
