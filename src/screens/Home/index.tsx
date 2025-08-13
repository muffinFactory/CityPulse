import { FC, useState } from "react"
import { FlatList, View } from "react-native"

import { BaseText, BaseTextInput } from "src/components/BaseText"
import AppButton from "src/components/Button"
import BaseScreen from "src/components/Layout/BaseScreen"
import Spinner from "src/components/Spinner"
import EventCardFragment from "src/Fragment/EventCard"
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
      {/* TODO: Move to src/Fragment/ListEvents */}
      <FlatList
        data={dataList}
        keyExtractor={(item, index) => `item-${item?.id || `__${index}`}`}
        renderItem={({ item }) => <EventCardFragment item={item} />}
        ListFooterComponent={
          <ListFooterComponent
            hasNextPage={hasNextPage}
            isFetching={isFetching}
            isLoading={isLoading}
            fetchNextPage={fetchNextPage}
          />
        }
      />
    </BaseScreen>
  )
}

type ListFooterComponentType = {
  hasNextPage: boolean
  isFetching: boolean
  isLoading: boolean
  fetchNextPage: () => void
}
const ListFooterComponent = ({ hasNextPage, isFetching, isLoading, fetchNextPage }: ListFooterComponentType) =>
  hasNextPage ? (
    <AppButton
      text={!isFetching && !isLoading ? "Load More" : undefined}
      onPress={() => !isFetching && !isLoading && fetchNextPage()}
      style={{ width: "50%", alignSelf: "center" }}
    >
      {(isFetching || isLoading) && <Spinner color="#fff" />}
    </AppButton>
  ) : undefined

export default HomeScreen
