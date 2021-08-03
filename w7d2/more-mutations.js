const listOfPlayers = [
  { name: "bob" },
  { name: "bob" },
  { name: "bob" },
  { name: "bob" },
  { name: "bob" },
]

listOfPlayers.find(player => player.name === "bob")
listOfPlayers.findIndex(player => player.name === "bob")


const listOfPlayers = {
  1: { id: 1, name: "bob" },
  2: { id: 2, name: "bob" },
  3: { id: 3, name: "bob" },
  4: { id: 4, name: "bob" },
  5: { id: 5, name: "bob" },
}

listOfPlayers[id]
Object.values(listOfPlayers)