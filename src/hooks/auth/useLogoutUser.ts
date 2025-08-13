import useAppNavigation from "../navigation/useAppNavigation"
import { defaultUser, useSetUserInfo } from "../useUserInfo"

export const useLogoutUser = () => {
  const setUserInfo = useSetUserInfo()
  const AppNavigation = useAppNavigation()

  return () => {
    AppNavigation.navigate("AuthNavigation", { screen: "SignIn" })
    setTimeout(() => {
      setUserInfo(defaultUser)
      // TODO: delete local storage
    }, 500)
  }
}
