export const phoneNumber = phoneNumberString => {
  let phone = phoneNumberString
  if (phone.charAt(0) === 1) {
    phone = phone.slice(1)
  }
  var cleaned = ("" + phone).replace(/\D/g, "")
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3]
  }
  return null
}
