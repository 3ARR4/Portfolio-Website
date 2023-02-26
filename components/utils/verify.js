/* Everything User Related */

export const verifyAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  if (localStorage.getItem("token") && user && user.role === "admin") {
    return true
  }
  return false
}

export const verifyStatus = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  // If the user's status is active or they have a grandfather account, they have full access
  // if (user && user.confirmed && (user.status === "active" || user.status === "grandfather" || user.status === "familyAndFriends" || user.status === "free")) {
  if (user && user.confirmed) {
    return true
  }
  return false
}

// The user exists and is confirmed true
export const verifyConfirmedUser = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return user && user.confirmed
}

export const verifyUser = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  if (localStorage.getItem("token") && user) {
    return true
  }
  return false
}
