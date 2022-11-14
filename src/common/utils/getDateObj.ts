export const getDateObject = (date: string) => {
  return new Date(Date.parse(date))
}

export const getDate = (date: string) => {
  const dateObj = getDateObject(date)

  return `${dateObj.getDate()}.${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`
}
