// Valid percentage between zero and one-hundred
export const ValidPercentage = value => {
  const valid = value >= 0 && value <= 100 && !isNaN(value)
  !valid && window.alert("Only a percentage between 0 and 100 can be entered.")
  return valid
}
