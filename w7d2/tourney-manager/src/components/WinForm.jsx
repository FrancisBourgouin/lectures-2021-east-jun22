import { useState } from 'react'

// findPlayerAndGiveWin : Function

export default function WinForm(props) {
  const { findPlayerAndGiveWin } = props
  const [name, setName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    findPlayerAndGiveWin(name)
  }

  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Give a win to this player</button>
    </form>
  )
}