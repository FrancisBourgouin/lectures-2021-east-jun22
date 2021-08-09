import { pickRandomly, pickWinningItem } from './robotHelpers'

describe("pickWinningItem helper function for robot", () => {
  it("should pick 🗿 when player picks the 🪓", () => {
    const result = pickWinningItem("🪓")

    expect(result).toBe("🗿")
  })
  it("should pick 🌳 when player picks the 🗿", () => {
    const result = pickWinningItem("🗿")

    expect(result).toBe("🌳")
  })
  it("should pick 🪓 when player picks the 🌳", () => {
    const result = pickWinningItem("🌳")

    expect(result).toBe("🪓")
  })
  it("should pick nothing when player data is invalid", () => {
    const result = pickWinningItem()

    expect(result).toBeNull()
  })
})

describe("pickRandom item helper function", () => {
  it("should return a string if player input is provided", () => {
    const result1 = pickRandomly("🗿")
    const result2 = pickRandomly("🪓")
    const result3 = pickRandomly("🌳")

    expect(typeof result1).toBe('string')
    expect(typeof result2).toBe('string')
    expect(typeof result3).toBe('string')
  })
  it("should return null if no player input is provided", () => {
    const result = pickRandomly()

    expect(result).toBeNull()
    expect(typeof result).not.toBe('string')
  })
})