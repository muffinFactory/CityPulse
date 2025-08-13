import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { ApiError } from "src/lib/Api"
import { RegisterParams, RegisterResponse, userRegisterAPI } from "src/service/user"

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
    onSuccess: data => {
      setUserInfo(data.user)
      // TODO store local
      onSuccess?.(data)
    },
    ...options
  })
}
