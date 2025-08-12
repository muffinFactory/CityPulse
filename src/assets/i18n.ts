import { I18nManager } from "react-native"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { languangeResources } from "./resource"

export const supportedLang = ["en", "ar"]
export const supportedRTL = ["ar"]

// Init
i18n.use(initReactI18next).init({
  resources: languangeResources,
  lng: I18nManager.isRTL ? "ar" : "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export const changeLanguage = async (lng: string) => {
  if (!supportedLang.includes(lng)) return
  await i18n.changeLanguage(lng)

  const isRTL = supportedLang.includes(lng)
  if (isRTL && I18nManager.isRTL !== isRTL) {
    I18nManager.forceRTL(isRTL)
    //TODO React-native restart
  }
}

export default i18n
