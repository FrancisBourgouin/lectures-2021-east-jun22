import { storiesOf } from '@storybook/react';
import Plant from '../components/Plant'


const properlyWateredPlant = {
  lastWatered: "2021-08-02",
  name: "Staghorn Fern",
  type: "Fern",
  wateringInterval: 4,
  isWatered: true
}

const improperlyWateredPlant = {
  lastWatered: "2021-07-02",
  name: "Calathea",
  type: "Tropical",
  wateringInterval: 10,
  isWatered: false
}
storiesOf("Plant", module)
  .add("No information", () => <Plant />)
  .add("In interval", () => <Plant {...properlyWateredPlant} />)
  .add("Outside interval", () => <Plant {...improperlyWateredPlant} />)