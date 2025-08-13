import { ApiResponse } from "src/lib/Api"
import { User } from "src/model/user"

export type LoginParams = {
  username: string
  password: string
}

export type LoginResponse = {
  user: User
  token: string
}

export const userLoginAPI = async ({ username, password }: LoginParams): Promise<ApiResponse<LoginResponse>> => {
  const successDummyResponse: ApiResponse<LoginResponse> = {
    data: {
      token: `userToken${password}`,
      user: {
        name: username
      }
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {}
  }

  return new Promise<ApiResponse<LoginResponse>>(resolve => {
    setTimeout(() => {
      resolve(successDummyResponse)
    }, 2500)
  })
}
