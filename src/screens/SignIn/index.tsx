import { FC, useCallback, useRef, useState } from "react"
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native"

import { BaseText, BaseTextInput } from "src/components/BaseText"
import AppButton from "src/components/Button"
import BaseScrollViewScreen from "src/components/Layout/BaseScrollViewScreen"
import ScreenHeader from "src/components/ScreenHeader"
import Spinner from "src/components/Spinner"
import { useLoginUserMutation } from "src/hooks/auth/useLoginUser"
import useAppNavigation from "src/hooks/navigation/useAppNavigation"
import { useAppTheme } from "src/hooks/useAppTheming"
import { AuthNavigationScreen } from "src/lib/routes/type"

const SignInScreen: FC<AuthNavigationScreen<"SignIn">> = ({ navigation, route }) => {
  const appNavigation = useAppNavigation()
  // TODO setup react hook forms
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigateMain = useCallback(() => appNavigation.navigate("HomeNavigation"), [appNavigation])

  const { mutate, reset, isPending: isLoading, isError, error } = useLoginUserMutation(navigateMain)

  const onFocus = () => {
    reset()
  }

  const Theme = useAppTheme()

  const passwordInputRef = useRef<TextInput>(null)

  const handleSignIn = () => {
    if (email.length > 4 && password.length > 4) {
      mutate({ username: email, password: password })
    }
  }

  const handleSignUp = () => {
    // Handle sign in logic here
    navigation.navigate("SignUp")
  }

  return (
    <BaseScrollViewScreen bounces={false}>
      {/* TODO: should use react-native-keyboard-controller */}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"position"} keyboardVerticalOffset={40}>
        <ScreenHeader title="Welcome" onBack={route.params?.enableBack} />
        <View style={styles.container}>
          {/* Insert App Icon Fragment, dummy view for now */}
          <View
            style={{
              backgroundColor: "black",
              height: 300,
              width: 300,
              alignSelf: "center",
              marginVertical: 50,
              borderRadius: 150
            }}
          />
          <BaseTextInput
            style={styles.input}
            editable={!isLoading}
            onFocus={onFocus}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            onSubmitEditing={() => passwordInputRef.current?.focus()}
            returnKeyType="next"
          />
          <BaseTextInput
            ref={passwordInputRef}
            style={styles.input}
            editable={!isLoading}
            onFocus={onFocus}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="go"
            secureTextEntry
            onSubmitEditing={() => console.log("hitLogin")}
          />
          <AppButton
            text={!isLoading ? "Sign In" : ""}
            onPress={handleSignIn}
            style={{ marginTop: 50 }}
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
          </AppButton>
          <View style={{ flexDirection: "row", marginTop: 12, alignSelf: "center" }}>
            <BaseText>{" Not a Member? "}</BaseText>
            <BaseText style={{ textDecorationLine: "underline", color: Theme.secondary }} onPress={handleSignUp}>
              {"Sign up"}
            </BaseText>
          </View>
          {isError ? (
            <BaseText
              style={{ marginTop: 12, alignSelf: "center", color: Theme.error, fontWeight: "500", fontSize: 18 }}
            >
              {error?.message || "Sign in Failed"}
            </BaseText>
          ) : (
            <View />
          )}
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

export default SignInScreen
