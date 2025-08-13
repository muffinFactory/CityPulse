// ColorValue type from RN is not accepted React-Navigation
export type ColorScheme = {
  background: string
  overlay: string
  primary: string
  secondary: string
  warning: string
  error: string
  // Later-Do: should expand this more
  headerTextColor: string
  textColor1: string // 100%
  textColor2: string // 70%
  textColor3: string // 50%
  // Later-Do: insert other color related feature here
  statusBarColor: string
  headerTintColor: string
  textColorOverPrimary: string
}
