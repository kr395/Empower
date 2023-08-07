//  Date Of Today View

const today = new Date();
const dayDateView = document.querySelector("#dayDate");
const timeView = document.querySelector("#time");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekday[today.getDay()];
let month;
let timeText = String(today);
let timeTextSlice = timeText.slice(0, 15);
dayDateView.innerHTML = timeTextSlice;

//  Live Changing Time
setInterval(() => {
  const time = new Date();
  let hr;
  let amPm;
  if (time.getHours() == 12) {
    amPm = "PM";
  } else if (time.getHours() > 12) {
    hr = time.getHours() - 12;
    amPm = "PM";
  } else if (time.getHours() == 0) {
    amPm = "AM";
  }
  const hrs = (hr < 10 ? "0" : " ") + String(hr);
  const min = (time.getMinutes() < 10 ? "0" : " ") + String(time.getMinutes());
  const sec = (time.getSeconds() < 10 ? "0" : " ") + String(time.getSeconds());
  timeView.innerHTML = `${hrs} : ${min} : ${sec}  ${amPm}`;
}, 1000);

// Login Using Local and session storage

const inputUserId = document.querySelector("#userId");
const inputPassword = document.querySelector("#pass");
const login = document.querySelector("#login");

// Creating User Data in Local Storage

// class userCreater {
//   constructor(userId, password) {
//     this.userId = userId;
//     this.password = password;
//   }
//   store() {
//     localStorage.setItem(this.userId, this.password);
//   }
// }

// users.every((currentValue,index,arr)=>{
//     console.log(arr)
// })
const checkArray = ["VBS3211"];

const users =[
    { id: "VBS3215", pass: "54321", admin: true, price: 100 },
    { id: "VBS3212", pass: "54321", admin: false, price: 100 },
    { id: "VBS3211", pass: "54321", admin: false, price: 100 },
    { id: "VBS3214", pass: "54321", admin: false, price: 100 },
  ];

// const result1 = checkArray.map((val) => {
//   return users.findIndex((el) => {
//     return el.id === val;
//   });
// });

// console.log(JSON.stringify(result1));
localStorage.setItem("users", JSON.stringify(users));
const storage_users = JSON.parse(localStorage.getItem("users"));
const input = [];
let id = storage_users.slice(0).every((storage_user, index) => {
  return (storage_user.id = "VBS3211");
});
console.log(storage_users[2].id)

input.push("VBS3213");
console.log(input);

const result = input.map((key) => {
  return storage_users.findIndex((b) => {
    return b.id === key;
  });
});
console.log(result);

login.addEventListener("click", () => {
  if (inputUserId.value == "" || inputPassword.value == "") {
    window.alert("Fill all Data");
  } else {
    // localStorage.setItem("counter", counter )
    // const user = new userCreater("Gopal","12345")
    // user1.store()
    // count.push(counter)
    // counter++

    if (id) {
      window.location.href = "http://127.0.0.1:5500/home/home.html";
    } else {
      window.alert("UserId or Password is wrong");
    }
  }
});


