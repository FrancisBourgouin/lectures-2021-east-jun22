// Playing with timeouts

console.log("BREAKFAST TIME")
setTimeout(() => console.log("Potato"), 0)
setTimeout(() => console.log("Eggs"), 0)
setTimeout(() => console.log("Bacon"), 0)
setTimeout(() => console.log("Hollandaise Sauce"), 0)
console.log("WELL THAT WAS YUMMY")

// A little bit slower ?
// 0 means next cycle ?
// setTimeout are asynchronous ?

// 1 - console.log
// 2 - setTimeout => Give to callback stack the callback, and the time
// 3 - setTimeout => Give to callback stack the callback, and the time
// 4 - setTimeout => Give to callback stack the callback, and the time
// 5 - setTimeout => Give to callback stack the callback, and the time
// 6 - console.log

// SPECIAL TIME ! (FINISHED PROCESSING EVERY BIT OF SYNCHRONOUS CODE)

// Start emptying the callback queue


setTimeout(() => {
  setTimeout(() => {
    console.log("Pouet pouet")
  }, 2000)
}, 1000)

// setTimeout => YO set a timer for 1 sec and run the callback once it reached it
// setTimeout => YO set a timer for 2 sec and run the callback once it reached it