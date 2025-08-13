import { FC } from "react"
import { StyleSheet, View } from "react-native"

import moment from "moment"

import { BaseText } from "src/components/BaseText"
import AppButton from "src/components/Button"
import BaseScreen from "src/components/Layout/BaseScreen"
import ScreenHeader from "src/components/ScreenHeader"
import { useUserInfo } from "src/hooks/useUserInfo"
import { AppScreen } from "src/lib/routes/type"

import NotFoundPage from "../NotFound"

const EventScreen: FC<AppScreen<"Event">> = ({ route }) => {
  const locationEvent = route.params.event
  const userInfo = useUserInfo()
  // const insets = useA

  const isFavorited = locationEvent?.id && userInfo.favorite_events_ids?.includes(locationEvent?.id)
  const setFavorite = (_item: any) => {} // TODO: setFavorite hook

  if (!locationEvent) {
    return <NotFoundPage />
  }

  return (
    <BaseScreen>
      <ScreenHeader title={"Event"} onBack />
      <View style={styles.container}>
        <BaseText style={styles.title}>{locationEvent.name}</BaseText>
        <BaseText style={styles.date}>
          {moment(locationEvent.dates?.start.dateTime).format("DD - MMMM - YYYY")}
        </BaseText>
      </View>

      <View style={{ marginBottom: 20, borderBottomWidth: 3 }} />
      <View style={{ height: 300, width: "100%", backgroundColor: "black" }}>
        {/* TODO mapView */}
        {/* <MapView
					style={{ flex: 1 }}
					initialRegion={{
						latitude: locationEvent.location?.latitude || 0,
						longitude: locationEvent.location?.longitude || 0,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}}
				>
					<Marker
						coordinate={{
							latitude: locationEvent.location?.latitude || 0,
							longitude: locationEvent.location?.longitude || 0,
						}}
					/>
				</MapView> */}
      </View>

      <View style={{ marginTop: 20, borderTopWidth: 3, padding: 20 }}>
        <AppButton
          text={isFavorited ? "Remove from Favorites" : "Add as Favorite"}
          style={{ width: "50%" }}
          onPress={() => setFavorite(locationEvent)}
        />
        {/* TODO isFavorited */}
      </View>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  date: {
    fontSize: 16,
    color: "#666"
  }
})

export default EventScreen
