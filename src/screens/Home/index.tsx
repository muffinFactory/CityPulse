import { FC, useState } from "react"
import { View } from "react-native"

import { BaseText, BaseTextInput } from "src/components/BaseText"
import BaseScreen from "src/components/Layout/BaseScreen"
import ListEvents from "src/Fragment/ListEvents"
import { useDiscoverEvents } from "src/hooks/events/useDiscoverEvents"
import useAppTranslation from "src/hooks/useAppTranslation"
import { useUserInfo } from "src/hooks/useUserInfo"
import { HomeNavigationScreen } from "src/lib/routes/type"
import { capitalize } from "src/util/string"

import styles from "./styles"

const HomeScreen: FC<HomeNavigationScreen<"Home">> = () => {
  const { t } = useAppTranslation()
  const userInfo = useUserInfo()
  const [keyword, setKeyword] = useState("")
  const { dataList, isLoading, isFetching, fetchNextPage, hasNextPage } = useDiscoverEvents(keyword)

  return (
    <BaseScreen fullscreen={true}>
      <View style={styles.header}>
        <BaseText style={styles.headerText}>
          {capitalize(t("welcomeUser", { name: userInfo?.name || "Guest" }))}
        </BaseText>
      </View>
      {/* Later-Do: move to src/Home/SearchBar */}
      <BaseTextInput
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          paddingHorizontal: 12,
          marginVertical: 16,
          marginHorizontal: "5%"
        }}
        placeholder={"Search Events"}
        onSubmitEditing={({ nativeEvent: { text } }) => setKeyword(text)}
        returnKeyType="search"
      />
      <ListEvents
        dataList={dataList}
        isFetching={isFetching}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
      />
    </BaseScreen>
  )
}

export default HomeScreen
