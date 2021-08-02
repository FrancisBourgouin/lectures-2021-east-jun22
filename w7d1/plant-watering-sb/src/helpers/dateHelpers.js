

export const timeDifference = (dateString) => {
  const currentDate = new Date()
  const dateToCheck = new Date(dateString)

  const difference = currentDate.getTime() - dateToCheck.getTime()

  return Math.floor(difference / 86400)
}