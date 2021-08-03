import PlayerListItem from "./PlayerListItem"

// players : Object of player objects
// addAWin(id) : Function

export default function PlayerList(props) {
  const { players, addAWin } = props
  const playerList = players ? Object.values(players) : []
  const parsedPlayers = playerList
    .map(player => (
      <PlayerListItem key={player.id} {...player} giveThisPlayerAWin={() => addAWin(player.id)} />
    ))

  return (
    <section>
      {parsedPlayers}
    </section>
  )
}