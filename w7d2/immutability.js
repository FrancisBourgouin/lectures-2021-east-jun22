// Immutability

// Immutable != mutable

let potato = "π₯"
let otherPotato = potato
potato = "π"

// 1 - potato you're a reference to the potato emoji
// 2 - otherPotato you're a reference to the potato emoji too
// 3 - Hey potato, now you reference the fries

console.log(potato, otherPotato)

// const potatoes = ["π₯", "π₯"]
// const otherPotatoes = potatoes
// potatoes[0] = "π"

// 1 - hey potatoes, you point towards the array ["π₯", "π₯"]
// 2 - hey otherPotatoes, you point towards the array ["π₯", "π₯"]
// 3 - hey first potato of ["π₯", "π₯"], change to fries

const potatoes = ["π₯", "π₯"]
const otherPotatoes = [...potatoes] // Shallow copy
// const otherPotatoes = potatoes.map(element =>Β element)
potatoes[0] = "π"



console.log(potatoes, otherPotatoes)


const deepPotatoes = [["π₯", "π₯"], ["π₯", "π₯"]]
const otherDeepPotatoes = [[...deepPotatoes[0]], [...deepPotatoes[1]]] // Shallow copy
// const otherPotatoes = potatoes.map(element =>Β element)
deepPotatoes[0][0] = "π"
deepPotatoes[2] = "π"

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
