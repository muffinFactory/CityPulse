import { LocationEventType } from "./event"

export type User = {
  name: string
  favorite_events_ids?: LocationEventType["id"][]
  favorite_events?: LocationEventType[] // initial lazily
}
