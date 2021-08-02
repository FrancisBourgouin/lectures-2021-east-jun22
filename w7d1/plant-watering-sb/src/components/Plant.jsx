import { timeDifference } from "../helpers/dateHelpers"

export default function Plant(props) {
  const { name, type, lastWatered, wateringInterval, isWatered } = props
  const isInvalid = !name || !type || !wateringInterval || !lastWatered

  const style = {
    color: isWatered ? "green" : "red"
  }

  return (
    <>
      {!isInvalid && <article style={style}>
        <h1>{name} ({type})</h1>
        <p>{lastWatered}</p>
        <p>{wateringInterval}</p>
      </article>}
      {isInvalid && <h1>Invalid plant</h1>}
    </>
  )
}