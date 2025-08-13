import { useCallback } from "react"

import { EventItemResponse } from "src/model/event"

import { useAddUserFavoriteEvent, useRemoveUserFavoriteEvent, useUserFavoriteEventsIds } from "./useUserInfo"
import { useUserStorage } from "./useUserStorage"

const useFavoriteEvent = (event?: EventItemResponse) => {
  const eventId = event?.id
  const addFavEvent = useAddUserFavoriteEvent()
  const removeFavEvent = useRemoveUserFavoriteEvent()
  const userFavoriteEvents = useUserFavoriteEventsIds()

  const isFavorited = !!eventId && !!userFavoriteEvents?.includes(eventId)
  const storage = useUserStorage()

  const toggleFavorite = useCallback(() => {
    if (!event?.id) return
    // Later-do: API interaction for toggling this
    if (isFavorited) {
      removeFavEvent(event, storage)
    } else {
      addFavEvent(event, storage)
    }
  }, [isFavorited, storage, event, addFavEvent, removeFavEvent])

  return { isFavorited, toggleFavorite }
}

export default useFavoriteEvent
