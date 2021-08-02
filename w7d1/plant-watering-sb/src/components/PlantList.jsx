import Plant from "./Plant"

export default function PlantList(props) {
  const { plants } = props

  const parsedPlants = plants && plants.map(data => <Plant {...data} key={data.name} />)

  return (
    <section>
      {!plants && <h1>YOU FORGOT THE PLANTS</h1>}
      {parsedPlants}
    </section>
  )
}