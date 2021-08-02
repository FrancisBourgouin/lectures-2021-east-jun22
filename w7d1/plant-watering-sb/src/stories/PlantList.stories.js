import { storiesOf } from '@storybook/react';
import PlantList from '../components/PlantList'

const plants = [
  { lastWatered: "2021-08-02", name: "Staghorn Fern", type: "Fern", wateringInterval: 4 },
  { lastWatered: "2021-08-01", name: "Monstera", type: "Tropical", wateringInterval: 7 },
  { lastWatered: "2021-07-22", name: "Pothos", type: "Tropical", wateringInterval: 6 },
  { lastWatered: "2021-07-02", name: "Calathea", type: "Tropical", wateringInterval: 10 },
]


storiesOf('PlantList', module)
  .add("Forgot data", () => <PlantList />)
  .add("With data", () => <PlantList plants={plants} />)