export default function Plant(props) {
  const { name, type, lastWatered, wateringInterval } = props

  return (
    <article>
      <h1>{name} ({type})</h1>
      <p>{lastWatered}</p>
      <p>{wateringInterval}</p>
    </article>
  )
}