
//  Login Validation
const body = document.querySelector("body")
const helloSpan = document.querySelector(".welcome")
body.onload = ()=>{
      const user = JSON.parse(localStorage.getItem("logedUser"))
      helloSpan.innerHTML = `Hello ${user.userName}`
    }