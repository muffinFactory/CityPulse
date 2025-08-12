import { useContext } from "react"

import { AppThemeContext } from "src/lib/provider/ThemeProvider"
import { ColorScheme } from "src/ui/type"

/**
 * App Theming Hook
 *
 * This hook provides access to the application's theme color palette
 *
 * Usage:
 * ```ts
 * const Theme = useAppTheme();
 * const primaryColor = Theme['primary'];
 * ```
 *
 * @throws {Error} If called without a surrounding ThemeProvider.
 * @returns {ColorScheme} The current theme object from context.
 */
export const useAppTheme = (): ColorScheme => {
  const context = useContext(AppThemeContext)
  if (!context) {
    throw new Error("useAppTheme must be used within a ThemeProvider")
  }

  return context.theme
}
