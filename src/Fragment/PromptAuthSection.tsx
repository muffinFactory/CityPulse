import React from "react"
import { StyleSheet, View } from "react-native"

import Ionicons from "@react-native-vector-icons/ionicons"

import { BaseText } from "src/components/BaseText"
import AppButton from "src/components/Button"
import useAppTranslation from "src/hooks/useAppTranslation"
import { capitalize } from "src/util/string"

const PromptAuthSection: React.FC<{ onLogin?: () => void }> = ({ onLogin }) => {
  const { t } = useAppTranslation()

  return (
    <View style={styles.container}>
      <Ionicons name="log-in-outline" size={48} color="#555" style={styles.icon} />
      <BaseText style={styles.text}>{`${capitalize(t("pleaseLogInToAccess"))}`}</BaseText>
      <AppButton text={`${capitalize(t("login"))}`} onPress={onLogin} />
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
