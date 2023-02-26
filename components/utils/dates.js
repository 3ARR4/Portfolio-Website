export const dateShortFormat = datetime => {
  const created = new Date(datetime)
  const month = created.getMonth() + 1
  const day = created.getDate() + 1
  const year = created.getFullYear()
  return month + "/" + day + "/" + year
}

export const dateShortFormatUNIX = timestampUNIX => {
  const created = new Date(timestampUNIX * 1000)
  const month = created.getMonth() + 1
  const day = created.getDate()
  const year = created.getFullYear()
  return month + "/" + day + "/" + year
}
