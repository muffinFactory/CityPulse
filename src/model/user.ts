import { EventItemResponse } from "./event"

// Later-Do: expand this
export type User = {
  name: string
  isGuest?: boolean
  quest?: string
  favoriteColor?: string
  favorite_events_ids?: EventItemResponse["id"][]
  favorite_events?: EventItemResponse[] // initial lazily
}
