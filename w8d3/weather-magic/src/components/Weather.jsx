export default function Weather(props) {

  return (
    <section>
      <h1>{props.cityName}</h1>
      <p>Currently {props.temp}</p>
      <p>{props.condition}</p>
    </section>
  )
}