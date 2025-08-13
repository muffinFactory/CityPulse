import { ApiResponse } from "src/lib/Api"
import { User } from "src/model/user"

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

export const userRegisterAPI = async ({
  username,
  password,
  quest,
  favoriteColor
}: RegisterParams): Promise<ApiResponse<RegisterResponse>> => {
  const successDummyResponse: ApiResponse<RegisterResponse> = {
    data: {
      token: `userToken${password}`,
      user: {
        name: username,
        quest: quest,
        favoriteColor
      }
    },
    status: 200,
    statusText: "OK",
    headers: {},
    config: {}
  }

  return new Promise<ApiResponse<RegisterResponse>>(resolve => {
    setTimeout(() => {
      resolve(successDummyResponse)
    }, 2500)
  })
}

export type LoginParams = {
  username: string
  password: string
}

export type LoginResponse = {
  user: User
  token: string
}

export type RegisterParams = {
  username: string
  password: string
  quest: string
  favoriteColor: string
}

export type RegisterResponse = LoginResponse
