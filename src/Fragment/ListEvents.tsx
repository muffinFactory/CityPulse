import { FlatList, View } from "react-native"

import { BaseText } from "src/components/BaseText"
import AppButton from "src/components/Button"
import Spinner from "src/components/Spinner"
import { EventItemResponse } from "src/model/event"

import EventCardFragment from "./EventCard"

type ListEventsProps = {
  dataList?: EventItemResponse[]
  hasNextPage?: boolean
  isFetching?: boolean
  isLoading?: boolean
  fetchNextPage?: () => void
}

// Later-do: Error fragment
const ListEvents = (props: ListEventsProps) => {
  const { dataList, hasNextPage, isFetching, isLoading, fetchNextPage } = props

  return (
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
      ListEmptyComponent={<ListEmptyComponent isLoading={isLoading} />}
    />
  )
}

export default ListEvents

type ListFooterComponentType = {
  hasNextPage?: boolean
  isFetching?: boolean
  isLoading?: boolean
  fetchNextPage?: () => void
}
const ListFooterComponent = ({ hasNextPage, isFetching, isLoading, fetchNextPage }: ListFooterComponentType) =>
  hasNextPage ? (
    <AppButton
      text={!isFetching && !isLoading ? "Load More" : undefined}
      onPress={() => !isFetching && !isLoading && fetchNextPage?.()}
      style={{ width: "50%", alignSelf: "center" }}
    >
      {(isFetching || isLoading) && <Spinner color="#fff" />}
    </AppButton>
  ) : undefined

const ListEmptyComponent = ({ isLoading = false }: { isLoading?: boolean }) => {
  if (isLoading) return <View />

  return (
    <View style={{ flexDirection: "row", marginHorizontal: 12 }}>
      <BaseText>No Events yet</BaseText>
    </View>
  )
}
