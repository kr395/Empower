//  Date Of Today View

const today = new Date()
const dayDateView = document.querySelector("#dayDate")
const timeView = document.querySelector("#time")
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[today.getDay()]
let month 
let timeText = String(today)
let timeTextSlice = timeText.slice(0,15)
dayDateView.innerHTML =  timeTextSlice

//  Live Changing Time
setInterval(() => {
const time = new Date() 
let hr
let amPm
if (time.getHours() == 12) {
    amPm = "PM"
} else if(time.getHours() > 12)  {
    hr = time.getHours() -12
    amPm = "PM"
} else if(time.getHours() == 0){
    amPm = "AM"
}
const hrs = (hr<10 ? "0": " ") + String(hr);
const min = (time.getMinutes()<10 ? "0": " ") + String(time.getMinutes());
const sec = (time.getSeconds()<10 ? "0": " ") + String(time.getSeconds());
timeView.innerHTML = `${hrs} : ${min} : ${sec}  ${amPm}`
}, 1000);

// Login Using Local and session storage 

const userId = document.querySelector("#userId")
const password = document.querySelector("#pass")
const login = document.querySelector("#login")

// Creating User Data in Local Storage
 
class userCreater{
       constructor(userId, password){
          this.userId = userId;
          this.password = password
       }
       store(){
        localStorage.setItem(userId, password)
    }
}

const user1 = userCreater()
console.log(user1)





// login.addEventListener("click",()=>{
//     users = {}
//     if (userId.value == "" || password.value == "") {
//         window.alert("Fill all Data") 

//     } else {
         
//          sessionStorage.setItem("userId1", `${String(userId.value).toUpperCase()}`)
//          sessionStorage.setItem("pass1", `${String(password.value).toUpperCase()}`)
    
//         }

// })

// console.log(sessionStorage.getItem("userId1"))
// console.log(sessionStorage.getItem("pass1"))

