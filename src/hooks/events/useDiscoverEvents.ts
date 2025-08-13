import { useMemo } from "react"

import { useInfiniteQuery } from "@tanstack/react-query"

import { InfiniteQueryAddon } from "src/model/api"
import { discoverEvent, LocationEventResponse } from "src/service/event"

type InfiniteLocationEventResponse = LocationEventResponse & InfiniteQueryAddon

// Later-Do: add user token or id for tracking or auth or etc

export const useDiscoverEvents = (keyword = "") => {
  const discoveryQuery = useInfiniteQuery({
    queryKey: ["locationEvents", keyword ?? "__EMPTY__"],
    initialPageParam: { offset: 0 },
    queryFn: async ({ pageParam }) => {
      const eventDatas = await discoverEvent({ keyword, page: pageParam.offset })

      const data = eventDatas.data

      const response: InfiniteLocationEventResponse = {
        ...eventDatas,
        hasNext: data.page?.totalPages ? pageParam.offset > data.page?.totalPages : false,
        nextOffset: pageParam.offset + 1
      }

      return response
    },
    getNextPageParam: lastPage => {
      if (!lastPage?.data?.page?.totalPages) return undefined

      if (lastPage.nextOffset < lastPage.data.page.totalPages) return { offset: lastPage.nextOffset }

      return undefined
    }
  })

  const dataList = useMemo(
    () => discoveryQuery.data?.pages.flatMap(page => page.data._embedded?.events) ?? [],
    [discoveryQuery.data]
  )

  return { ...discoveryQuery, dataList }
}
