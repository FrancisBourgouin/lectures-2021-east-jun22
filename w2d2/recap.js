// Function & Callback recap

// Functions

function willYouJudge() {
  return "Judging"
}

const coolFunction = function () {

}

const coolerFunctionQuestionMark = () => {

}
// Arrow functions
// implicit returns vs explicit returns

// Callbacks

// Easier to read and concise
// Make a function more flexible
// Avoid repetition / DRY

const someCoolFunction = (value, action) => {
  action(value, 5)
}

const repeat = (value, amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(value)
  }
}


const array = [1, 2, 3, 4, 5]

array.forEach((value, index, array) => { })

// HoF

// - A function that takes a function as a parameter (callbacks)
// - A function that returns a function (closures)
