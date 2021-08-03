// Immutability

// Immutable != mutable

let potato = "🥔"
let otherPotato = potato
potato = "🍟"

// 1 - potato you're a reference to the potato emoji
// 2 - otherPotato you're a reference to the potato emoji too
// 3 - Hey potato, now you reference the fries

console.log(potato, otherPotato)

// const potatoes = ["🥔", "🥔"]
// const otherPotatoes = potatoes
// potatoes[0] = "🍟"

// 1 - hey potatoes, you point towards the array ["🥔", "🥔"]
// 2 - hey otherPotatoes, you point towards the array ["🥔", "🥔"]
// 3 - hey first potato of ["🥔", "🥔"], change to fries

const potatoes = ["🥔", "🥔"]
const otherPotatoes = [...potatoes] // Shallow copy
// const otherPotatoes = potatoes.map(element => element)
potatoes[0] = "🍟"



console.log(potatoes, otherPotatoes)


const deepPotatoes = [["🥔", "🥔"], ["🥔", "🥔"]]
const otherDeepPotatoes = [[...deepPotatoes[0]], [...deepPotatoes[1]]] // Shallow copy
// const otherPotatoes = potatoes.map(element => element)
deepPotatoes[0][0] = "🍟"
deepPotatoes[2] = "🍟"

console.log(deepPotatoes, otherDeepPotatoes)

const purePop = array => {
  return [...potatoes].pop()
}
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
console.log(purePop(potatoes))
