import { useState, useEffect } from 'react'
import useWeatherData from './hooks/useWeatherData';
import Weather from './components/Weather';
import CityForm from './components/CityForm';
import CityList from './components/CityList';
import Loading from './components/Loading';

import './App.css';

// 09fd719b4b698ec0260e424f83378e3d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


function App() {
  const { weatherData, isLoading, fetchWeather } = useWeatherData()
  const [currentCity, setCurrentCity] = useState(null)
  const [cityList, setCityList] = useState([])

  useEffect(() => {
    if (currentCity) {
      fetchWeather(currentCity)
    }
  }, [currentCity])

  useEffect(() => {
    if (currentCity && !cityList.includes(currentCity)) {
      setCityList(prev => [...prev, currentCity])
    }
  }, [currentCity])

  const updateCurrentCity = formData => {
    setCurrentCity(formData.cityName)
  }

  return (
    <div className="App">
      <header>
        <h1>Super Weather App !</h1>
      </header>
      <CityForm onSubmit={updateCurrentCity} />
      <CityList cityList={cityList} onClick={updateCurrentCity} />
      {currentCity && weatherData && <Weather cityName={currentCity} temp={weatherData.main.temp} condition={weatherData.weather[0].description} />}
      <Loading active={isLoading} />
    </div>
  );
}

export default App;
