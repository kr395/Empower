//  Date Of Today View

const dayDateView = document.querySelector("#dayDate");
const timeView = document.querySelector("#time");
const today = new Date();
let timeText = String(today);
let timeTextSlice = timeText.slice(0, 15);
dayDateView.innerHTML = timeTextSlice;

//  Live Changing Time
setInterval(() => {
  const time = new Date();
  let hr = time.getHours();
  let amPm;
  if (time.getHours() == 12) {
    amPm = "PM";
  } else if (time.getHours() > 12) {
    hr = time.getHours() - 12;
    amPm = "PM";
  } else if (time.getHours() == 0) {
    amPm = "AM";
  } else if (time.getHours() < 12) {
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
const loginBtn = document.querySelector("#login");

// const users = [
//   { userName: "Mohit", id: "VBS3215", password: "54321", isAdmin: true },
//   { userName: "Aman", id: "VBS3212", password: "54321", isAdmin: false },
//   { userName: "Gopal", id: "VBS3211", password: "54321", isAdmin: false },
//   { userName: "Pranjul", id: "VBS3214", password: "54321", isAdmin: false },
// ];
// localStorage.setItem("users", JSON.stringify(users));

loginBtn.addEventListener("click", () => {
  const inputIdValue = String(inputUserId.value).toUpperCase();
  const inputPasswordValue = String(inputPassword.value).toUpperCase();
  users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => {
    return user.id === inputIdValue;
  });
  function isValidate(id, password) {
    if (user.id === id && user.password === password) {
      window.location.href = "http://127.0.0.1:5500/home/home.html";
    } else {
      window.alert("Invalid Login Details");
    }
  }
  if (!user) {
    window.alert("Fill all Data");
  } else {
    isValidate(inputIdValue, inputPasswordValue);
  }
});
