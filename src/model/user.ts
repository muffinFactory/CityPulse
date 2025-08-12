import { LocationEventType } from "./event"

// Todo: expand this
export type User = {
  name: string
  isGuest?: boolean
  favorite_events_ids?: LocationEventType["id"][]
  favorite_events?: LocationEventType[] // initial lazily
}
