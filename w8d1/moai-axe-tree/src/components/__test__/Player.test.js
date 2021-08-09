import { render, fireEvent } from '@testing-library/react'
import Player from '../Player'

describe("player component tests", () => {
  it("should trigger a round when a player clicks on a item", () => {
    const fakeSetPlayerItem = jest.fn()
    const { queryByTestId } = render(<Player setPlayerItem={fakeSetPlayerItem} />)

    const moaiButton = queryByTestId("moai")

    fireEvent.click(moaiButton)

    expect(fakeSetPlayerItem).toHaveBeenCalled()
  })
})