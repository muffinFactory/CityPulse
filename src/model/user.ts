import { LocationEventType } from "./event"

// Todo: expand this
export type User = {
  name: string
  isGuest?: boolean
  quest?: string
  favoriteColor?: string
  favorite_events_ids?: LocationEventType["id"][]
  favorite_events?: LocationEventType[] // initial lazily
}
