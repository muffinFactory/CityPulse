import { useMemo } from "react"
import { View } from "react-native"

import MapView, { Marker } from "react-native-maps"

import { EventItemResponse } from "src/model/event"

type EventMapsProps = {
  event: EventItemResponse
}

const EventMapFragment = ({ event }: EventMapsProps) => {
  const latitude = useMemo(() => {
    const latitudeData = event?._embedded?.venues?.[0]?.location.latitude
    if (latitudeData) return parseFloat(latitudeData)

    return 0
  }, [event?._embedded?.venues])
  const longitude = useMemo(() => {
    const longitudeData = event?._embedded?.venues?.[0]?.location.longitude
    if (longitudeData) return parseFloat(longitudeData)

    return 0
  }, [event?._embedded?.venues])

  // Later-do: theres probably better way to check this
  const enableMarker = !!latitude && !!longitude

  return (
    <View>
      <MapView
        style={{ height: 300, width: "100%" }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        {enableMarker && (
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude
            }}
          />
        )}
      </MapView>
    </View>
  )
}

export default EventMapFragment
