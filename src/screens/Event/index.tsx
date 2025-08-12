import { FC } from "react"
import { Text, View } from "react-native"

import BaseScreen from "src/components/Layout/BaseScreen"
import { AppScreen } from "src/lib/routes/type"

import NotFoundPage from "../NotFound"

const EventScreen: FC<AppScreen<"Event">> = ({ route }) => {
  const locationEvent = route.params.event

  if (!locationEvent) {
    return <NotFoundPage />
  }

  return (
    <BaseScreen>
      <View>
        <Text>EventScreen</Text>
      </View>
    </BaseScreen>
  )
}

export default EventScreen
