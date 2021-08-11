export default function CityList(props) {
  const { cityList, onClick } = props

  const parsedCities = cityList.map(city =>
    <button data-testid={city} onClick={() => onClick({ cityName: city })}>{city}</button>
  )
  return (
    <section>
      {parsedCities}
    </section>
  )
}