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
        localStorage.setItem(this.userId, this.password)
        
    }
}
localStorage.setItem("userId", "Gopal")
localStorage.setItem("Password", "12345")

login.addEventListener("click",()=>{
    counter = 1
    count = []
    if (userId.value == "" || password.value == "") {
        window.alert("Fill all Data") 
       

    } else {
        // localStorage.setItem("counter", counter )
        // const user = new userCreater("Gopal","12345")
        // user1.store()
        // count.push(counter)
        // counter++    
        let id = localStorage.getItem("userId")
        let pas = localStorage.getItem("Password")
        if (id == userId.value && pas == password.value ) {    
        window.location.href = "https://www.google.com/"
        } else {
            window.alert("UserId or Password is wrong")

        }    
        
        }

})


