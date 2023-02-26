export const animate = () => {
  const animateArray = ["bounce", "shakeX", "rubberBand", "swing", "jello", "heartbeat"]
  const randomElement = animateArray[Math.floor(Math.random() * animateArray.length)]
  return `animate__animated animate__${randomElement} animate__delay-3s`
}
