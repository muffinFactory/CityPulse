import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"

interface SpinnerProps {
  size?: "small" | "large"
  color?: string
}

// Later-Do: get better spinner that has more size options
const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Spinner
