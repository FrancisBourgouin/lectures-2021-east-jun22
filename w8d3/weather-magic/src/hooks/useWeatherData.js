import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchWeather = (currentCity) => {
    if (currentCity) {
      const secretKey = "09fd719b4b698ec0260e424f83378e3d"
      const url = `//api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${secretKey}`

      setIsLoading(true)
      axios
        .get(url)
        .then(res => {
          setWeatherData(res.data)
          setTimeout(() => {
            setIsLoading(false)
          }, 2500)
        })
    }
  }



  return { weatherData, isLoading, fetchWeather }
}