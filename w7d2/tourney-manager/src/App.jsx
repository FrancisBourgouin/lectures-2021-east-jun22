import { useState } from 'react';

import PlayerList from './components/PlayerList';
import SuperWinAllButtonOfDestiny from './components/SuperWinAllButtonOfDestiny';

import { playersOriginalData } from './data/playerData'

import './App.scss';
import WinForm from './components/WinForm';


function App() {
  const [playerData, setPlayerData] = useState(playersOriginalData)

  const addAWin = (id) => {
    const newPlayerData = { ...playerData }
    //  new{ 
    //   same{}
    //   same{}
    //   same{}
    // }
    const player = { ...newPlayerData[id] }
    // {name, id...}
    player.wins = player.wins + 1
    //  new{ 
    //   same{}
    //   new{}
    //   same{}
    // }
    newPlayerData[id] = player

    setPlayerData(newPlayerData)
  }

  const betterAddAWin = (id) => {
    setPlayerData(pendingState => {
      console.log(pendingState, playerData)

      const newPlayerData = { ...pendingState }

      const player = { ...newPlayerData[id] }
      player.wins = player.wins + 1

      newPlayerData[id] = player

      return newPlayerData
    })
  }

  const findPlayerAndGiveWin = (name) => {
    const playerList = Object.values(playerData)

    const player = playerList.find(player => player.name === name)

    if (player) {
      addAWin(player.id)
    }
  }

  const allTheWins = () => {
    const listOfPlayerIds = Object.keys(playerData)
    for (const playerId of listOfPlayerIds) {
      betterAddAWin(playerId)
    }

    // // operations on new player playerData
    // setPlayerData(newPlayerData)
    // // operations on new player playerData
    // setPlayerData(newPlayerData)
    // // operations on new player playerData
    // setPlayerData(newPlayerData)
    // // operations on new player playerData
    // setPlayerData(newPlayerData)
    // // operations on new player playerData
    // setPlayerData(newPlayerData)
  }
  return (
    <div className="App">
      <header>
        <h1>
          Super Tourney Manager 2000 ! (We use space technology)
        </h1>
      </header>
      <PlayerList players={playerData} addAWin={addAWin} />
      <SuperWinAllButtonOfDestiny allTheWins={allTheWins} />
      <WinForm findPlayerAndGiveWin={findPlayerAndGiveWin} />
    </div>
  );
}

export default App;
