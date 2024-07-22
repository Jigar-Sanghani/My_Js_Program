import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Project/signup/signup.html"
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
        price: getvalue("price")
    }

    alert("Add Food Successfully || ")

    window.location.href = "/Final-Exam/"
}


document.getElementById("form").addEventListener("submit", handleData)
