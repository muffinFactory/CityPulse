import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { ApiError } from "src/lib/Api"
import { LoginParams, LoginResponse, userLoginAPI } from "src/service/user"

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
    onSuccess: data => {
      setUserInfo(data.user)
      onSuccess?.(data)
    },
    ...options
  })
}
