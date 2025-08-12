import { AppRegistry, LogBox } from "react-native"

import { name as appName } from "./app.json"
import App from "./src/App"

if (process.env.NODE_ENV === "test") {
  LogBox.ignoreAllLogs() // suppress all logs in tests
} else {
  LogBox.ignoreLogs(["Require cycle:"]) // suppress require-cycle warnings, it's fine
}

AppRegistry.registerComponent(appName, () => App)
