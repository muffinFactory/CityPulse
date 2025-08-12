import { useNavigation } from "@react-navigation/native"

import { MainAppNavigation } from "src/lib/routes/type"

/**
 * useNavigation with type support for MainApp (home)
 */
const useAppNavigation = () => {
  const navigation = useNavigation<MainAppNavigation>()

  return navigation
}

export default useAppNavigation
