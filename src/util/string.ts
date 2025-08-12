export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

export const toTitleCase = (text: string) =>
  text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
