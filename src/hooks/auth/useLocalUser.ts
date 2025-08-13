import { useCallback, useState } from "react"

import { User } from "src/model/user"
import { createStorage, getCurrentStorageUser } from "src/storage"

import { defaultUser, useSetUserInfo } from "../useUserInfo"

const useLocalUser = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userName, setUsername] = useState<User["name"]>("")
  const currentUser = getCurrentStorageUser()
  const setUserInfo = useSetUserInfo()

  const setupLocalUser = useCallback(() => {
    if (!currentUser) {
      setUserInfo(defaultUser)
      setIsLoading(false)

      return
    }

    const storage = createStorage(currentUser)
    const username = storage.getString("name")
    if (currentUser && username) {
      setUsername(username)
      setUserInfo({
        name: username,
        quest: storage.getString("quest"),
        favoriteColor: storage.getString("favoriteColor"),
        favorite_events_ids: JSON.parse(storage.getString("favorite_events_ids") ?? "[]"),
        favorite_events: JSON.parse(storage.getString("favorite_events") ?? "[]")
      })
      setIsLoading(false)
    } else {
      setUserInfo(defaultUser)
      setIsLoading(false)
    }
  }, [currentUser, setUserInfo])

  return { isLoading, userName, setupLocalUser }
}

export default useLocalUser
