import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { create } from "../components/api.js";



let is_login = localStorage.getItem("is_login") || false;
if (!is_login) {
    window.location.href = "/Final/html/signup.html"
}

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


let cartList = JSON.parse(localStorage.getItem("course-data")) || []

let user = JSON.parse(localStorage.getItem("user")) || []

if (user == "Admin") {

    const handleData = (e) => {
        e.preventDefault();
        let user = {
            name: getvalue("name"),
            category: getvalue("category"),
            image: getvalue("image"),
            actual_price_usd: getvalue("price"),
            description: getvalue("description")
        }

        create(user)
        alert("Add Course Successfully || ")
        window.location.href = "/Final/"
        console.log(cartList);
    }

    // console.log("wrear");


    document.getElementById("form").addEventListener("submit", handleData)

}
else {

    alert("New Course Create Only Admin Sorry ||")
    window.location.href = "/Final/"

    // console.log("ert");

}



