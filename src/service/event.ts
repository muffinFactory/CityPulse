import Api, { ApiResponse } from "src/lib/Api"
import { EventItemResponse } from "src/model/event"

import env from "./env"
import AppURLS from "./url"

type LocationEventParams = {
  keyword: string
  page: number
}

export type LocationEventResponse = ApiResponse<{
  page?: { size?: number; totalElement?: number; totalPages?: number }
  _embedded?: { events: EventItemResponse[] }
}>

export const discoverEvent = async ({ keyword = "", page = 0 }: LocationEventParams): Promise<LocationEventResponse> =>
  Api({
    method: "get",
    url: AppURLS.Discovery_API,
    params: {
      keyword,
      countryCode: "US", // for simply more data
      apikey: env.API_KEY_DISCOVERY,
      size: 5,
      page: page.toString()
    }
  })
