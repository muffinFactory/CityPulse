import useAppNavigation from "../navigation/useAppNavigation"
import { defaultUser, useSetUserInfo } from "../useUserInfo"

export const useLogoutUser = () => {
  const setUserInfo = useSetUserInfo()
  const AppNavigation = useAppNavigation()

  return () => {
    AppNavigation.navigate("AuthNavigation", { screen: "SignIn" })
    setTimeout(() => {
      setUserInfo(defaultUser)
      // TODO: delete local storage, or not so registered user can still see their quest
    }, 500)
  }
}
