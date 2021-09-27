export const convertToFirstLetterUpperCase = (value: String): String => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}