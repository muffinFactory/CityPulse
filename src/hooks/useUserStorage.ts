import { useEffect, useState } from "react"

import { createStorage } from "src/storage"

export const useUserStorage = (userId: string) => {
  const [storage, setStorage] = useState(() => createStorage(userId))

  useEffect(() => {
    setStorage(createStorage(userId))
  }, [userId])

  return storage
}
