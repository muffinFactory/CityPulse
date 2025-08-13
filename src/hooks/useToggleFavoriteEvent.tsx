import { useCallback } from "react"

import { useAddUserFavoriteEvent, useRemoveUserFavoriteEvent, useUserFavoriteEventsIds } from "./useUserInfo"
import { useUserStorage } from "./useUserStorage"

const useFavoriteEvent = (eventId: string = "") => {
  const addFavEvent = useAddUserFavoriteEvent()
  const removeFavEvent = useRemoveUserFavoriteEvent()
  const userFavoriteEvents = useUserFavoriteEventsIds()

  const isFavorited = !!userFavoriteEvents?.includes(eventId)
  const storage = useUserStorage()

  const toggleFavorite = useCallback(() => {
    // Later-do: API interaction for toggling this
    if (isFavorited) {
      removeFavEvent(eventId, storage)
    } else {
      addFavEvent(eventId, storage)
    }
  }, [isFavorited, storage, eventId, addFavEvent, removeFavEvent])

  return { isFavorited, toggleFavorite }
}

export default useFavoriteEvent
