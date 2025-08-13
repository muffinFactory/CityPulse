import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { ApiError } from "src/lib/Api"
import { LoginParams, LoginResponse, userLoginAPI } from "src/service/user"
import { createStorage, setCurrentStorageUser } from "src/storage"

import { useSetUserInfo } from "../useUserInfo"

export function useLoginUserMutation(
  onSuccess?: (data: LoginResponse) => void,
  options?: UseMutationOptions<LoginResponse, ApiError, LoginParams>
) {
  const setUserInfo = useSetUserInfo()

  return useMutation<LoginResponse, ApiError, LoginParams>({
    mutationKey: ["MUTATION_KEY_LOGIN"],
    mutationFn: async params => {
      const data = await userLoginAPI(params)

      return data.data
    },
    onSuccess: (data, params) => {
      const currentUser = `${params.username}_${params.password}`
      setCurrentStorageUser(currentUser)
      const storage = createStorage(currentUser)
      setUserInfo({
        ...data.user,
        quest: storage.getString("quest"),
        favoriteColor: storage.getString("favoriteColor"),
        favorite_events_ids: JSON.parse(storage.getString("favorite_events_ids") ?? "[]"),
        favorite_events: JSON.parse(storage.getString("favorite_events") ?? "[]")
      })

      onSuccess?.(data)
    },
    ...options
  })
}
