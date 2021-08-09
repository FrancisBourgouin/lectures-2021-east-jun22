import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Computer from "../Computer"

describe("Computer component tests", () => {
  it("should have the class cheating when cheating mode is active", () => {
    const { queryByText } = render(<Computer isCheating />)

    const robotButton = queryByText("🤖")

    expect(robotButton).toHaveClass("cheating")
  })

  it("should not have the class cheating when cheating mode is inactive", () => {
    const { queryByText } = render(<Computer />)

    const robotButton = queryByText("🤖")

    expect(robotButton).not.toHaveClass("cheating")
  })

  it("should switch between cheating or not when we click on the computer face", () => {
    const { queryByText } = render(<Computer />)

    const robotButton = queryByText("🤖")

    expect(robotButton).not.toHaveClass("cheating")

    fireEvent.click(robotButton)

    expect(robotButton).toHaveClass("cheating")

  })
})