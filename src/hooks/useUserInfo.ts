import { MMKV } from "react-native-mmkv"
import { create } from "zustand"

import { EventItemResponse } from "src/model/event"
import { User } from "src/model/user"

type UserInfoStore = {
  user: User // later-do: should've split favorites
  userStorage?: MMKV // later-do: should've instantiated storage here
  setUser: (user: User, storage?: MMKV) => void
  addFavoriteEvent: (eventId: EventItemResponse["id"], storage?: MMKV) => void
  removeFavoriteEvent: (eventId: EventItemResponse["id"], storage?: MMKV) => void
}

const useUserInfoStore = create<UserInfoStore>(set => ({
  user: defaultUser,
  userStorage: undefined,
  setUser: newUser => set({ user: newUser }),
  addFavoriteEvent: (eventId, storage) => {
    set(prevState => {
      const newFavorites = [...(prevState?.user.favorite_events_ids ?? []), eventId]
      storage?.set("favorite_events_ids", JSON.stringify(newFavorites))

      return { ...prevState, user: { ...prevState.user, favorite_events_ids: newFavorites } }
    })
  },
  removeFavoriteEvent: (eventId, storage) => {
    set(prevState => {
      const currentFavorites = prevState?.user.favorite_events_ids ?? []
      const newFavorites = currentFavorites.filter(id => id !== eventId)
      storage?.set("favorite_events_ids", JSON.stringify(newFavorites))

      return { ...prevState, user: { ...prevState.user, favorite_events_ids: newFavorites } }
    })
  }
}))

export const useUserInfo = () => useUserInfoStore(state => state.user)
export const useSetUserInfo = () => useUserInfoStore(state => state.setUser)
export const useUserFavoriteEventsIds = () => useUserInfoStore(state => state.user.favorite_events_ids)
export const useAddUserFavoriteEvent = () => useUserInfoStore(state => state.addFavoriteEvent)
export const useRemoveUserFavoriteEvent = () => useUserInfoStore(state => state.removeFavoriteEvent)

export const defaultUser = {
  name: "Guest",
  isGuest: true
}
