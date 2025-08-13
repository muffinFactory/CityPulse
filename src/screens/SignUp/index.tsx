import { useCallback, useRef, useState } from "react"
import { Alert, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"

import { BaseText, BaseTextInput } from "src/components/BaseText"
import AppButton from "src/components/Button"
import BaseScrollViewScreen from "src/components/Layout/BaseScrollViewScreen"
import ScreenHeader from "src/components/ScreenHeader"
import Spinner from "src/components/Spinner"
import { useRegisterUserMutation } from "src/hooks/auth/useRegisterUser"
import useAppNavigation from "src/hooks/navigation/useAppNavigation"
import { useAppTheme } from "src/hooks/useAppTheming"

const SignUpScreen = ({}) => {
  const appNavigation = useAppNavigation()
  // Later-Do setup react hook forms
  const [email, setEmail] = useState("Sir Lancelot")
  const [password, setPassword] = useState("holy grail")
  const [confirmPassword, setConfirmPassword] = useState("holy grail")
  const [quest, setQuest] = useState("To seek the holy grail")
  const [favoriteColor, setFavoriteColor] = useState("Blue")

  const navigateMain = useCallback(() => appNavigation.navigate("HomeNavigation"), [appNavigation])

  const { mutate, isPending: isLoading, isError, error } = useRegisterUserMutation(navigateMain)

  const Theme = useAppTheme()

  const signUpQA2 = useRef<TextInput>(null)
  const signUpQA3 = useRef<TextInput>(null)
  const signUpQA4 = useRef<TextInput>(null)
  const signUpQA5 = useRef<TextInput>(null)

  const registerUser = () => {
    if (!(email.length > 4 && password.length > 4 && quest.length > 4 && favoriteColor.length > 2)) {
      Alert.alert("All field have min 4+ char (except color)")

      return
    }
    if (password === confirmPassword) {
      mutate({ username: email, password, quest, favoriteColor })
    } else {
      Alert.alert("Password not match")
    }
  }

  return (
    <BaseScrollViewScreen bounces={false}>
      {/* Later-Do: should use react-native-keyboard-controller */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"} keyboardVerticalOffset={40}>
        <ScreenHeader title="Welcome" onBack />
        <View style={styles.container}>
          {/* Insert App Icon Fragment, dummy view for now */}
          <View
            style={{
              backgroundColor: "black",
              height: 50,
              width: 50,
              alignSelf: "center",
              marginVertical: 50,
              borderRadius: 150
            }}
          />
          {isError ? (
            <BaseText
              style={{ marginVertical: 12, alignSelf: "center", color: Theme.error, fontWeight: "500", fontSize: 18 }}
            >
              {error?.message || "Register Failed"}
            </BaseText>
          ) : (
            <View />
          )}
          <BaseTextInput
            style={styles.input}
            editable={!isLoading}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            onSubmitEditing={() => signUpQA2.current?.focus()}
            returnKeyType="next"
          />
          <BaseTextInput
            ref={signUpQA2}
            style={styles.input}
            editable={!isLoading}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            autoComplete="password"
            secureTextEntry // may breaks for simulation purposes
            onSubmitEditing={() => signUpQA3.current?.focus()}
            textContentType={"password"}
          />
          <BaseTextInput
            ref={signUpQA3}
            style={styles.input}
            editable={!isLoading}
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            returnKeyType="next"
            secureTextEntry // may break for simulation purposes
            onSubmitEditing={() => signUpQA4.current?.focus()}
            textContentType={"password"}
            autoComplete="password"
          />
          <BaseTextInput
            ref={signUpQA4}
            style={styles.input}
            editable={!isLoading}
            placeholder="What is your quest?"
            value={quest}
            onChangeText={setQuest}
            returnKeyType="next"
            onSubmitEditing={() => signUpQA5.current?.focus()}
          />
          <BaseTextInput
            ref={signUpQA5}
            style={styles.input}
            editable={!isLoading}
            placeholder="What is your favorite color?"
            value={favoriteColor}
            onChangeText={setFavoriteColor}
            returnKeyType="done"
          />
          <AppButton
            text={!isLoading ? "Sign up" : ""}
            onPress={registerUser}
            style={{ marginTop: 50 }}
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </BaseScrollViewScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12
  },
  button: {
    backgroundColor: "#007AFF",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
})

export default SignUpScreen
