import React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"

import Ionicons from "@react-native-vector-icons/ionicons"
import moment from "moment"

import { BaseText } from "src/components/BaseText"
import useAppNavigationContext from "src/hooks/navigation/useAppNavigationContext"
import { EventItemResponse } from "src/model/event"

type EventCardProps = {
  item?: EventItemResponse
  isFavorite?: boolean
  onPress?: (item: EventItemResponse) => void
}

const EventCardFragment: React.FC<EventCardProps> = ({ item, isFavorite, onPress }) => {
  const { goToEvent } = useAppNavigationContext()
  if (!item) return <View />

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => (onPress ? onPress?.(item) : goToEvent(item))}>
      <View style={styles.cardDescContainer}>
        <BaseText numberOfLines={1} style={[styles.cardDescHeader]}>
          {item.name}
        </BaseText>
        <BaseText style={styles.cardDescBody}>
          {moment(item.dates?.start.dateTime).format("DD - MMMM - YYYY")}
          {/* {item.dates?.start.dateTime} */}
        </BaseText>
        {isFavorite && <Ionicons name="star" color={"yellow"} size={30} />}
      </View>
      <View style={{ height: 100, width: 1, backgroundColor: "black" }} />
      <Image source={{ uri: item.images?.[0]?.url }} style={{ height: 100, width: 100, padding: 4, borderRadius: 4 }} />
    </TouchableOpacity>
  )
}

export default EventCardFragment

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cardDescContainer: {
    paddingVertical: 4,
    width: "70%"
  },
  cardDescHeader: {
    fontSize: 18,
    fontWeight: "500"
  },
  cardDescBody: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500"
  }
})
