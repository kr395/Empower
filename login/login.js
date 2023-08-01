// Code For Day and Date

const today = new Date()
const dayDateView = document.querySelector("#dayDate")
const timeView = document.querySelector("#time")
dayDateView.innerHTML =  `${today.getDay()} ${today.getMonth()} ${today.getFullYear()}`

