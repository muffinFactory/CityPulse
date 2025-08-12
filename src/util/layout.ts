import { I18nManager } from "react-native"

export const alignView = I18nManager.isRTL ? "right" : "left"

export const RTLPick = <T>(rightValue: T, leftValue: T): T => (I18nManager.isRTL ? rightValue : leftValue)
