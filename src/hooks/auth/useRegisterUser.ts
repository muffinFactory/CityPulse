import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { ApiError } from "src/lib/Api"
import { RegisterParams, RegisterResponse, userRegisterAPI } from "src/service/user"
import { createStorage, setCurrentStorageUser } from "src/storage"

import { useSetUserInfo } from "../useUserInfo"

export function useRegisterUserMutation(
  onSuccess?: (data: RegisterResponse) => void,
  options?: UseMutationOptions<RegisterResponse, ApiError, RegisterParams>
) {
  const setUserInfo = useSetUserInfo()

  return useMutation<RegisterResponse, ApiError, RegisterParams>({
    mutationKey: ["MUTATION_KEY_REG"],
    mutationFn: async params => {
      const data = await userRegisterAPI(params)

      return data.data
    },
    onSuccess: (data, params) => {
      const currentUser = `${params.username}_${params.password}`
      setCurrentStorageUser(currentUser)
      const storage = createStorage(currentUser)
      setUserInfo({ ...data.user })
      console.log(storage.toJSON())
      storage.set("quest", data?.user?.quest ?? "")
      storage.set("favoriteColor", data?.user?.favoriteColor ?? "")
      onSuccess?.(data)
    },
    ...options
  })
}
