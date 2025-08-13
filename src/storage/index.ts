import { MMKV, Mode } from "react-native-mmkv"

const generalStorage = new MMKV({
  id: "general-storage"
})

export const getCurrentStorageUser = () => generalStorage.getString("currentUser")
export const setCurrentStorageUser = (currentUser = "") => generalStorage.set("currentUser", currentUser)

export const createStorage = (userParams: string) =>
  new MMKV({
    id: `${userParams}-storage`,
    mode: Mode.SINGLE_PROCESS,
    readOnly: false
  })
