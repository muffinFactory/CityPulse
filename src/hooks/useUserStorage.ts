import { useEffect, useState } from "react"

import { MMKV } from "react-native-mmkv"

import { createStorage, getCurrentStorageUser } from "src/storage"

export const useUserStorage = () => {
  const userId = getCurrentStorageUser()
  const [storage, setStorage] = useState<MMKV | undefined>(() => createStorage(userId ?? ""))

  useEffect(() => {
    setStorage(createStorage(userId ?? ""))
  }, [userId])

  return storage
}
