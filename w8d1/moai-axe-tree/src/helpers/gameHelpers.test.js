import { determineWinner, startRound } from './gameHelpers'
// startRound

// Should take the player input
// Should take if the computer is cheating or not
// Should determine the winner
// Should output either 'computer', 'human'

describe("determineWinner helper function", () => {
  it("should return lifeform wins when playerItem is the winning item", () => {
    const winningCombinations = [
      { player: '🗿', computer: '🪓' },
      { player: '🪓', computer: '🌳' },
      { player: '🌳', computer: '🗿' }
    ]

    for (const combination of winningCombinations) {
      const result = determineWinner(combination)
      expect(result).toBe("Lifeforms win")
    }
  })

  it("should return it's a tie when playerItem and computerItem are the same", () => {
    const tieCombinations = [
      { player: '🗿', computer: '🗿' },
      { player: '🪓', computer: '🪓' },
      { player: '🌳', computer: '🌳' }
    ]

    for (const combination of tieCombinations) {
      const result = determineWinner(combination)
      expect(result).toBe("it's a tie... fighter?")
    }
  })
  it("should return Skynet will rise when computer as a winning combination", () => {
    const computerCombinations = [
      { player: '🗿', computer: '🌳' },
      { player: '🪓', computer: '🗿' },
      { player: '🌳', computer: '🪓' }
    ]

    for (const combination of computerCombinations) {
      const result = determineWinner(combination)
      expect(result).toBe("Skynet will rise")
    }
  })
})

describe("startRound helper function", () => {
  it("should return {message:Skynet will rise, winner:\"computer\"} if given isCheating to true", () => {
    const result = startRound(true, "🌳")

    expect(result.message).toBe("Skynet will rise")
    expect(result.winner).toBe("computer")
  })

  it("should return a string in both properties if isCheating is false", () => {
    const result = startRound(false, "🌳")
    const potentialWinners = ["computer", "player", "tie"]
    expect(typeof result.message).toBe("string")
    expect(potentialWinners.includes(result.winner)).toBeTruthy()
  })
})