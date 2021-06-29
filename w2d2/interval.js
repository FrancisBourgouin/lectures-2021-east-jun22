// Interval

const annoyingFrancis = () => console.log("Everybody okay? Yes no toaster")
const emojiParty = () => console.log("🙈🙈🤓🥔🌊🌊🍟🔥")
// // We want to show the message
// annoyingFrancis()
// // then we want to show the message every 1.5s
// setInterval(annoyingFrancis, 15000)


const fancySetInterval = (callback, timeInMs) => {
  callback()
  setInterval(callback, timeInMs)
}

fancySetInterval(emojiParty, 1000)