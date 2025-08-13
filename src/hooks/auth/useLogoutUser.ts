import { setCurrentStorageUser } from "src/storage"

import useAppNavigation from "../navigation/useAppNavigation"
import { defaultUser, useSetUserInfo } from "../useUserInfo"

export const useLogoutUser = () => {
  const setUserInfo = useSetUserInfo()
  const AppNavigation = useAppNavigation()

  return () => {
    AppNavigation.navigate("AuthNavigation", { screen: "SignIn" })
    setTimeout(() => {
      setUserInfo(defaultUser)
      // Later-Do: delete local storage, or not so registered user can still see their quest
      setCurrentStorageUser("")
    }, 500)
  }
}
