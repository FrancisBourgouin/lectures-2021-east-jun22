// Value vs callback in setState

const [number, setNumber] = useState(1)

setNumber(number + 1) // 2
setNumber(number + 1) // 2
setNumber(number + 1) // 2
setNumber(number + 1) // 2
setNumber(number + 1) // 2

const [number, setNumber] = useState(1)

setNumber(prev => prev + 1) // 2
setNumber(prev => prev + 1) // 3
setNumber(prev => prev + 1) // 4
setNumber(prev => prev + 1) // 5