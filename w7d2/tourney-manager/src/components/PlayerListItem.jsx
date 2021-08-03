// id : String
// name : String
// nickname : String
// wins : Int
// addAWin(id) : Function

export default function PlayerListItem(props) {
  const { name, nickname, wins, giveThisPlayerAWin } = props


  return (
    <article>
      <h1>{name} aka. {nickname}</h1>
      {!wins && <h2>Currently with no wins</h2>}
      {wins === 1 && <h2>Currently with 1 win</h2>}
      {wins > 1 && <h2>Currently with {wins} wins</h2>}

      <button onClick={giveThisPlayerAWin}>Add a win</button>
    </article>
  )
}