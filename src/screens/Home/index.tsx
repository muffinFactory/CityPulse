import { FC } from "react"
import { View } from "react-native"

import { BaseText } from "src/components/BaseText"
import BaseScreen from "src/components/Layout/BaseScreen"
import useAppTranslation from "src/hooks/useAppTranslation"
import { useUserInfo } from "src/hooks/useUserInfo"
import { HomeNavigationScreen } from "src/lib/routes/type"
import { capitalize } from "src/util/string"

import styles from "./styles"

const HomeScreen: FC<HomeNavigationScreen<"Home">> = () => {
  const { t } = useAppTranslation()
  const userInfo = useUserInfo()

  return (
    <BaseScreen fullscreen={true}>
      <View style={styles.header}>
        <BaseText style={styles.headerText}>{`${capitalize(t("welcome"))}, ${userInfo?.name}`}</BaseText>
      </View>
      {/* TODO: Insert TextBox search Input with eclipse like container */}
      {/* TODO: Flatlist for EventCard */}
    </BaseScreen>
  )
}

export default HomeScreen
