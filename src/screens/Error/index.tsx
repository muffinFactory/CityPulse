import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { ScreenOptionsType } from "src/lib/routes/type"

const ErrorScreen: FC<ScreenOptionsType<"ErrorPage">> = () => {
  return (
    <BaseScreen>
      <View>
        <Text>ErrorScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default ErrorScreen
