import Plant from './Plant'

export default function PlantList() {
  const plantData = [
    { lastWatered: "2021-08-02", name: "Staghorn Fern", type: "Fern", wateringInterval: 4 },
    { lastWatered: "2021-08-01", name: "Monstera", type: "Tropical", wateringInterval: 7 },
    { lastWatered: "2021-07-22", name: "Pothos", type: "Tropical", wateringInterval: 6 },
    { lastWatered: "2021-07-02", name: "Calathea", type: "Tropical", wateringInterval: 10 },
  ]

  const parsedPlants = plantData.map(data => <Plant key={data.name} {...data} />)
  // const parsedPlants = plantData.map(data => 
  // <Plant 
  //   lastWatered={data.lastWatered}
  //   name={data.name}
  //   type={data.type}
  //   wateringInterval={data.wateringInterval}  
  // />)
  // const parsedPlants = plantData.map(data => Plant({...data}))

  return (
    <section>
      <h1>Plants!</h1>
      {parsedPlants}
    </section>
  )
}