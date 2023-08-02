// Code For Day and Date

const today = new Date()
const dayDateView = document.querySelector("#dayDate")
const timeView = document.querySelector("#time")
dayDateView.innerHTML =  `${today.getDay()} ${today.getMonth()} ${today.getFullYear()}`


setInterval(() => {
const time = new Date()    
const hrs = time.getHours()
const min = time.getMinutes()
const sec = time.getSeconds()
timeView.innerHTML = `${hrs} : ${min} : ${sec} `
}, 1000);

