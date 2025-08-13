import { FlatList } from "react-native"

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
