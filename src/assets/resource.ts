import { Resource } from "i18next"

// Later-Do: add type support to highlight missing translation?
export const languangeResources: Resource = {
  en: {
    translation: {
      welcome: "Welcome",
      welcomeUser: "Welcome, {{name}}",
      home: "home",
      profile: "profile",
      userPanel: "settings",
      login: "login",
      pleaseLogInToAccess: "Please log in to use this feature.",
      myNameIs: "My name is {{name}}",
      CityPulse: "CityPulse"
    }
  },
  ar: {
    translation: {
      // translated by ChatGpt
      welcome: "مرحبا",
      welcomeUser: "مرحباً {{name}}",
      home: "الصفحة الرئيسية",
      profile: "الملف الشخصي",
      userPanel: "الإعدادات",
      login: "تسجيل الدخول",
      pleaseLogInToAccess: "يرجى تسجيل الدخول لاستخدام هذه الميزة.",
      myNameIs: "اسمي {{name}}",
      CityPulse: "سيتي بالس"
    }
  }
}
