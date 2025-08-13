import { create } from "zustand"

import { User } from "src/model/user"

type UserInfoStore = {
  user: User
  setUser: (user: User) => void
}

export const defaultUser = {
  name: "Guest",
  isGuest: true
}

const useUserInfoStore = create<UserInfoStore>(set => ({
  user: defaultUser,
  setUser: newUser => set({ user: newUser })
}))

export const useUserInfo = () => useUserInfoStore(state => state.user)
export const useSetUserInfo = () => useUserInfoStore(state => state.setUser)
