import { FC, ReactNode } from "react"
import { TouchableOpacity, View } from "react-native"

import Ionicons, { IoniconsIconName } from "@react-native-vector-icons/ionicons"

import { changeAppLanguage, currentAppLanguage } from "src/assets/i18n"
import { BaseText } from "src/components/BaseText"
import AppButton from "src/components/Button"
import BaseScrollViewScreen from "src/components/Layout/BaseScrollViewScreen"
import { useLogoutUser } from "src/hooks/auth/useLogoutUser"
import { HomeNavigationScreen } from "src/lib/routes/type"
import { RTLPick } from "src/util/layout"

const UserPanelScreen: FC<HomeNavigationScreen<"UserPanel">> = ({}) => {
  const changeLanguage = () => {
    changeAppLanguage(currentAppLanguage === "en" ? "ar" : "en")
  }

  const logout = useLogoutUser()

  return (
    <BaseScrollViewScreen fullscreen style={{ paddingTop: 10 }}>
      <HeaderText>Account & Language</HeaderText>
      <DummyPanelButton menuIcon="man">Change Profile</DummyPanelButton>
      <DummyPanelButton menuIcon="calendar">My Events</DummyPanelButton>
      {/* Todo switch button for this */}
      <DummyPanelButton menuIcon="language" onPress={changeLanguage}>
        Change Language
      </DummyPanelButton>
      <Separator />
      <HeaderText>Security</HeaderText>
      <DummyPanelButton menuIcon="lock-closed">Change Pin</DummyPanelButton>
      <DummyPanelButton menuIcon="eye">Bio-Metric</DummyPanelButton>
      <Separator />
      <HeaderText>Information</HeaderText>
      <DummyPanelButton menuIcon="build">About CityPulse</DummyPanelButton>
      <DummyPanelButton menuIcon="book">Terms and services</DummyPanelButton>
      {/* TODO: Logout action */}
      <AppButton text="Log out" style={{ marginTop: 40, marginHorizontal: 20 }} onPress={logout} />
    </BaseScrollViewScreen>
  )
}

const HeaderText = ({ children }: { children: ReactNode }) => (
  <View
    style={{
      marginHorizontal: 12,
      marginBottom: 8,
      flexDirection: "row"
    }}
  >
    <BaseText
      style={{
        fontSize: 20,
        fontWeight: "500"
      }}
    >
      {children}
    </BaseText>
  </View>
)
const DummyPanelButton = ({
  children,
  onPress,
  menuIcon
}: {
  children: ReactNode
  onPress?: () => void
  menuIcon: IoniconsIconName
}) => {
  const arrowIcon = RTLPick("arrow-back", "arrow-forward")

  return (
    <TouchableOpacity onPress={onPress} style={{ marginVertical: 12, marginHorizontal: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={menuIcon} size={20} style={{ paddingRight: 8 }} />
        <BaseText style={{}}>{children}</BaseText>
        <View style={{ flex: 1 }} />
        <Ionicons name={arrowIcon} size={24} />
      </View>
    </TouchableOpacity>
  )
}

const Separator = () => {
  return <View style={{ height: 5, width: "100%", backgroundColor: "rgba(0,0,0,0.25)" }} />
}

export default UserPanelScreen
