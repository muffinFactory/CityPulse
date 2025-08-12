import { Resource } from "i18next"

// TODO: add type support to highlight missing translation?
export const languangeResources: Resource = {
  en: {
    translation: {
      welcome: "Welcome",
      home: "home",
      profile: "profile",
      userPanel: "settings",
      login: "login",
      pleaseLogInToAccess: "Please log in to use this feature."
    }
  },
  ar: {
    translation: {
      // translated by ChatGpt
      welcome: "مرحبا",
      home: "الصفحة الرئيسية",
      profile: "الملف الشخصي",
      userPanel: "الإعدادات",
      login: "تسجيل الدخول",
      pleaseLogInToAccess: "يرجى تسجيل الدخول لاستخدام هذه الميزة."
    }
  }
}
