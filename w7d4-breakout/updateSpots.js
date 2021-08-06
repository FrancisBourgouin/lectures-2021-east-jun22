const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
    appointments: [1, 2, 3]
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
    appointments: []
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 4,
    appointments: [4]
  }
];
const appointments = {
  1: {
    id: 1,
    time: "1pm",
    interview: {
      student: "Bob",
      interviewer: 1
    }
  },
  2: {
    id: 2,
    time: "2pm",
    interview: null
  },
  3: {
    id: 3,
    time: "3pm",
    interview: null
  },
  4: {
    id: 4,
    time: "4pm",
    interview: null
  }
}
const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

const state = {
  day: 'Monday',
  days,
  appointments,
  interviewers
}


// update the spots !

// spots ?!?
// Free spots for the day
// Appointments where the interview isn't booked

// Update the spots
// Need an accurate count of free appointments
const updateSpots = (state, day) => {
  const currentDay = day || state.day
  // We need to find the current day object
  const currentDayObj = state.days.find(dayObj => dayObj.name === currentDay)
  const currentDayObjIndex = state.days.findIndex(dayObj => dayObj.name === currentDay)
  // We need to ask for the appointment ids
  const listOfApptIds = currentDayObj.appointments
  // We need to check every appointment to see if they're free or not
  const listOfFreeAppointments = listOfApptIds.filter(apptId => !state.appointments[apptId].interview)
  // We need to update the spots values on the day object
  const newSpots = listOfFreeAppointments.length

  const updatedState = { ...state }
  updatedState.days = [...state.days]
  const updatedDay = { ...currentDayObj }
  updatedDay.spots = newSpots
  updatedState.days[currentDayObjIndex] = updatedDay

  return updatedState
}

const simplerUpdateSpots = (day, appointments) => {

}