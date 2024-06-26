<<<<<<< HEAD
import getvalue from "../components/getvalue.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()  

let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("User-Data")) || []

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("name"),
        age: getvalue("age"),
        email: getvalue("email"),
        password: getvalue("password")
    }

    localStorage.setItem("User-Data", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/Tourist%20Exam/index.html"
    alert("Sign-Up Successfully !!")

}


document.getElementById("form").addEventListener("submit", handleData)
=======
import getvalue from "../components/getvalue.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()  

let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("User-Data")) || []

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("name"),
        age: getvalue("age"),
        email: getvalue("email"),
        password: getvalue("password")
    }

    localStorage.setItem("User-Data", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/index.html"
    alert("Sign-Up Successfully !!")

}


document.getElementById("form").addEventListener("submit", handleData)
>>>>>>> 66fe1c48fd967d8f4e30347bd40e64491b87537f
