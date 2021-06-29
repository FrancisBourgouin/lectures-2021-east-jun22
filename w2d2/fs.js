const fs = require('fs');

// fs.readFile("./francis_fridge.txt", { encoding: "utf8" }, (err, data) => {
//   const fridgeData = data
//   if (err) {
//     return console.log(err)
//   }

//   if (!fridgeData) {
//     return console.log("YOUR FRIDGE IS EMPTY")
//   }
//   console.log(fridgeData)
//   console.log(`This is what you have in the fridge ${fridgeData}`)
// })

const fetchContentFromFridge = (callback) => {
  fs.readFile("./francis_fridge.txt", { encoding: "utf8" }, (err, data) => {
    if (err) {
      return console.log(err)
    }
    if (!data) {
      return console.log("fridge is empty")
    }
    callback(data)
  })
}

const cookWithFridgeIngredients = (ingredients) => {
  console.log("Let's start to cook!")
  setTimeout(() => {
    console.log(`Here's your meal: Fried ${ingredients}`)
  }, 2000)
}

fetchContentFromFridge(cookWithFridgeIngredients)


const otherFetchContentFromFridge = (callback) => {
  fs.readFile("./francis_fridge.txt", { encoding: "utf8" }, (err, data) => {
    callback({ err, data })
  })
}

const otherCookWithFridgeIngredients = (fridge) => {
  const fridgeIngredients = fridge.data
  const fridgeError = fridge.err

  if (fridgeError) {
    console.log(fridgeError)
  }
  console.log("Let's start to cook!")
  setTimeout(() => {
    console.log(`Here's your meal: Fried ${ingredients}`)
  }, 2000)
}

fetchContentFromFridge(cookWithFridgeIngredients)