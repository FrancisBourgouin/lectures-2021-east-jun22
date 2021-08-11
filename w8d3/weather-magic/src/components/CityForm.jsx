import { useState } from "react"

export default function CityForm(props) {
  const [formData, setFormData] = useState({
    cityName: ""
  })

  const handleChange = event => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.onSubmit(formData)
    setFormData({ cityName: "" })
  }
  return (
    <form onSubmit={handleSubmit} className="CityForm">
      <h1>Enter the city name</h1>
      <input
        type="text"
        name="cityName"
        onChange={handleChange}
        value={formData.cityName}
        placeholder="City name"
      />
      <button type="submit">Fetch Weather!</button>
    </form>
  )
}