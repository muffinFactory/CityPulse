import { useTranslation } from "react-i18next"

import { TranslationKeys } from "src/assets/TranslationKeys"

const useAppTranslation = () => {
  const { t, ...rest } = useTranslation()

  // Strongly typed t() function
  const typedT = (key: TranslationKeys, options?: Record<string, any>) => t(key, options)

  return { t: typedT, ...rest }
}

export default useAppTranslation
