
//  Login Validation
const body = document.querySelector("body")
const helloSpan = document.querySelector(".welcome")
const user = JSON.parse(localStorage.getItem("logedUser"))
body.onload = ()=>{
    if (!user) {
        window.alert("Please Login again")
        window.location.href = "http://127.0.0.1:5500/login/login.html"
    } else {
      helloSpan.innerHTML = `Hello ${user.userName}`
    }
    }
// Logoout Functunality

// const logoutbtn = document.querySelector("#logout_btn")
// logoutbtn.addEventListener('click',()=>{
//     localStorage.removeItem("logedUser")
//     window.location.href = "http://127.0.0.1:5500/login/login.html"
// })

// Dropdown Animation
const icons = document.querySelectorAll("i")
console.log(icons)
