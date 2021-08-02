import './App.css';
import PlantList from './components/PlantList';

function App() {
  const plants = [
    { lastWatered: "2021-08-02", name: "Staghorn Fern", type: "Fern", wateringInterval: 4 },
    { lastWatered: "2021-08-01", name: "Monstera", type: "Tropical", wateringInterval: 7 },
    { lastWatered: "2021-07-22", name: "Pothos", type: "Tropical", wateringInterval: 6 },
    { name: "Calathea", type: "Tropical", wateringInterval: 10 },
  ]
  return (
    <div className="App">
      <PlantList plants={plants} />
    </div>
  );
}

export default App;
