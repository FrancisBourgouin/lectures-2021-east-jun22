// Events
const fs = require('fs')
const EventEmitter = require('events')

const fridgeEmitter = new EventEmitter()

// fridgeEmitter.on() // Listens
// fridgeEmitter.emit() // Emits

fs.readFile("./francis_fridge.txt", { encoding: "utf8" }, (err, data) => {
  if (err || !data) {
    return console.log('sadness')
  }
  fridgeEmitter.emit("ready")
})

setInterval(() => {
  fridgeEmitter.emit("ready")
}, 1500)



fridgeEmitter.on('ready', () => {
  console.log("Fridge was opened")
})
fridgeEmitter.on('ready', () => {
  console.log("Fridge was opened!")
})
fridgeEmitter.on('ready', () => {
  console.log("Fridge was opened!!")
})

// document.addEventListener('click')