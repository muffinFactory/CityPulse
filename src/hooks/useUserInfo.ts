import { MMKV } from "react-native-mmkv"
import { create } from "zustand"

import { EventItemResponse } from "src/model/event"
import { User } from "src/model/user"

type UserInfoStore = {
  user: User // later-do: should've split favorites
  userStorage?: MMKV // later-do: should've instantiated storage here
  setUser: (user: User, storage?: MMKV) => void
  addFavoriteEvent: (event: EventItemResponse, storage?: MMKV) => void
  removeFavoriteEvent: (event: EventItemResponse, storage?: MMKV) => void
}

const useUserInfoStore = create<UserInfoStore>(set => ({
  user: defaultUser,
  userStorage: undefined,
  setUser: newUser => set({ user: newUser }),
  addFavoriteEvent: (event, storage) => {
    set(prevState => {
      const newFavoritesIds = [...(prevState?.user.favorite_events_ids ?? []), event.id]
      const newFavorites = [...(prevState?.user.favorite_events ?? []), event]
      storage?.set("favorite_events_ids", JSON.stringify(newFavoritesIds))
      storage?.set("favorite_events", JSON.stringify(newFavorites))

      return {
        ...prevState,
        user: {
          ...prevState.user,
          favorite_events_ids: newFavoritesIds,
          favorite_events: newFavorites
        }
      }
    })
  },
  removeFavoriteEvent: (event, storage) => {
    set(prevState => {
      const currentFavoritesIds = prevState?.user.favorite_events_ids ?? []
      const newFavoritesIds = currentFavoritesIds.filter(id => id !== event.id)
      const newFavorites = (prevState?.user.favorite_events ?? []).filter(item => item.id !== event.id)
      storage?.set("favorite_events_ids", JSON.stringify(newFavoritesIds))
      storage?.set("favorite_events", JSON.stringify(newFavorites))

      return {
        ...prevState,
        user: {
          ...prevState.user,
          favorite_events_ids: newFavoritesIds,
          favorite_events: newFavorites
        }
      }
    })
  }
}))

export const useUserInfo = () => useUserInfoStore(state => state.user)
export const useSetUserInfo = () => useUserInfoStore(state => state.setUser)
export const useUserFavoriteEventsIds = () => useUserInfoStore(state => state.user.favorite_events_ids)
export const useUserFavoriteEvents = () => useUserInfoStore(state => state.user.favorite_events)
export const useAddUserFavoriteEvent = () => useUserInfoStore(state => state.addFavoriteEvent)
export const useRemoveUserFavoriteEvent = () => useUserInfoStore(state => state.removeFavoriteEvent)

export const defaultUser = {
  name: "Guest",
  isGuest: true
}
