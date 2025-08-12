import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { HomeNavigationScreen } from "src/lib/routes/type"

const HomeScreen: FC<HomeNavigationScreen<"Home">> = () => {
  return (
    <BaseScreen style={{ justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default HomeScreen
