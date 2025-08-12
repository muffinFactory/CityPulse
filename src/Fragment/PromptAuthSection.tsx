import React from "react"
import { StyleSheet, Text, View } from "react-native"

import Ionicons from "@react-native-vector-icons/ionicons"

import AppButton from "src/components/Button"

const PromptAuthSection: React.FC<{ onLogin?: () => void }> = ({ onLogin }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="log-in-outline" size={48} color="#555" style={styles.icon} />
      <Text style={styles.text}>Please log in to use this feature.</Text>
      <AppButton text="Log in" onPress={onLogin} iconName="add" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2
  },
  icon: {
    marginBottom: 12
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
    textAlign: "center"
  }
})

export default PromptAuthSection
