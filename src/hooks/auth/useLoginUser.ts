import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { ApiError } from "src/lib/Api"
import { LoginParams, LoginResponse, userLoginAPI } from "src/service/user"

export function useLoginUser(options?: UseMutationOptions<LoginResponse, ApiError, LoginParams>) {
  return useMutation<LoginResponse, ApiError, LoginParams>({
    mutationKey: ["MUTATION_KEY_LOGIN"],
    mutationFn: async params => {
      const data = await userLoginAPI(params)

      return data.data
    },
    ...options
  })
}
