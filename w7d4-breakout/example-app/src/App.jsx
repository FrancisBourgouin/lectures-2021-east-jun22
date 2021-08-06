import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: "Francis",
    nickname: "Petit Poulet",
    description: "East coast intructor yeah."
  })

  const [darkMode, setDarkMode] = useState(false)





  return (
    <div className="App">
      <h1 onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌑" : "🌞"}</h1>

      {!darkMode && <Profile
        name={user.name}
        nickname={user.nickname}
        description={user.description}
        darkMode={darkMode}
      />}
      {/* 
      <Profile {...user} darkMode={darkMode} />

      <Profile {...{ ...user, darkMode }} /> */}
    </div>
  );
}

export default App;
