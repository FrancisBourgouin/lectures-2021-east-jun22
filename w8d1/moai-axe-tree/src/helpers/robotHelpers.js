
export const pickWinningItem = (playerItem) => {
  if (playerItem === "🗿") {
    return "🌳"
  }
  if (playerItem === "🌳") {
    return "🪓"
  }
  if (playerItem === "🪓") {
    return "🗿"
  }
  return null
}

export const pickRandomly = (playerItem) => {
  const validEmojis = ["🗿", "🪓", "🌳"]
  if (validEmojis.includes(playerItem)) {
    const randomIndex = Math.floor(Math.random() * validEmojis.length)
    return validEmojis[randomIndex]
  }
  return null
}
