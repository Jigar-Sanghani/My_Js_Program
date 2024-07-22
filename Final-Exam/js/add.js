import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { create } from "../components/api.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Exam/html/signup.html"
}

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


let cartList = JSON.parse(localStorage.getItem("Book-Food")) || []

const handleData = (e) => {
    e.preventDefault();
    let user = {
        name: getvalue("name"),
        image : getvalue("image"),
        cost: getvalue("price"),
        rating : getvalue("rating")
    }
    create(user)
    alert("Add Food Successfully || ")
    window.location.href = "/Final-Exam/"
}


document.getElementById("form").addEventListener("submit", handleData)
