import './App.css';
import Header from './components/Header';
import PlantList from './components/PlantList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PlantList />
      </main>
    </div>
  );
}

export default App;
