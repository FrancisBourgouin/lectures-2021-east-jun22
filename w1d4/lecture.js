// Why do we use variables ?

// Reuse, readability, avoid repetition

const rounder = function (number, roundness) {
  const roundingFactor = Math.pow(10, roundness)
  return Math.round(number * roundingFactor) / roundingFactor
}

console.log(rounder(8.99))

// Why do we use functions?

// for(let i = 0; i < array.length; i++){
//   const item = array[i]
// }




const sayHiToTheList = function (list) {
  for (const listItem of list) {
    // console.log('Hi ' + listItem)
    console.log(`Hi ${listItem} !`)
  }
}


const singHiToTheList = function (list) {
  for (const listItem of list) {
    console.log(`🎶🎵Hi ${listItem}🎵🎶`)
  }
}

const list = ["Chicken", "Poulet", "Pollo"]
sayHiToTheList(list)
singHiToTheList(list)

const somethingHiToTheList = function (list, something) {
  for (const listItem of list) {
    something(listItem)
  }
}

const yellValue = function (value) {
  console.log(value.toUpperCase())
}
const lol = function () {
  console.log("lol")
}

somethingHiToTheList(list, yellValue)
somethingHiToTheList(list, lol)

// const someFunction = function(){ console.log("RAWR") }
// const someOtherFunction = someFunction

// naan or neon

// Strict Parents: need to have at least 85, unless it's an art class, then you need at least 65
// Chill Parents: as long as you have 60, we cool.

// grade object -> gradeValue, subject
// grade -> {value:80, subject:"maths"}

// const judgeAGrade = function (grade) {
//   if (grade.subject === "arts" && grade.value > 65) {
//     return console.log("GOOD JOB")
//   }
//   if (grade.value > 85) {
//     return console.log("GOOD JOB")
//   }

//   return console.log("I AM DISAPPOINT")

// }

const judgeAGrade = function (grade, parentHappy) {
  if (parentHappy(grade)) {
    return console.log("GOOD JOB")
  }
  return console.log("I AM DISAPPOINT")

}

const strictParentHappy = function (grade) {
  if (grade.subject === "arts" && grade.value > 65) {
    return true
  }
  if (grade.value > 85) {
    return true
  }
  return false
}

const chillParentHappy = function (grade) {
  return grade.value > 60
}

const chillestParentHappy = grade => grade.value > 30

judgeAGrade({ subject: "history", value: 70 }, strictParentHappy)

judgeAGrade({ subject: "history", value: 70 }, chillParentHappy)
judgeAGrade({ subject: "history", value: 70 }, function (grade) {
  return grade.value > 60
})
judgeAGrade({ subject: "history", value: 70 }, grade => grade.value > 50)


const someArray = ["🥟", "❄", "🎉"]

someArray.forEach(item => console.log(item))

// Higher Order Function ( HoF ), director, manager, president

// someArray.forEach()

// forEach vs for


const showMeTheString = someString => console.log(someString)


// Let's make our own forEach, with blackjack and...

// Array as an input, and a callback

const forEach = function (array, callback) {
  for (const element of array) {
    callback(element)
  }
}

forEach([1, 2, 3, 4, 5], item => console.log(item))

// Filter needs an array and a condition callback
// We need to output a new array containing the values that were true

const filter = function (array, callback) {
  // Declare a buffer that will take in all the good values
  const buffer = []
  // Iterate over the array
  for (const item of array) {
    // check if value pass condition
    if (callback(item)) {
      // if true, push to the buffer
      buffer.push(item)
    }
    // if not, let it float in the emptiness of the void

  }
  // return the buffer
  return buffer

}
const someWeirdConditionListThingy = [4, 5, 6, 7, 8, 9]

console.log(filter([1, 2, 3, 4, 5], item => item > 2))
console.log(filter([1, 2, 3, 4, 5], item => someWeirdConditionListThingy.includes(item)))
console.log(filter([1, 2, 3, 4, 5], () => (Math.random() > 0.4)))