import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    alert("Please Sign-Up First || ");
    window.location.href = "/Final-Project/signup/signup.html"
}

const flightData = (e) => {
    e.preventDefault();
    let user = {
        from: getvalue("from"),
        to: getvalue("to"),
        departure: getvalue("departure"),
        return: getvalue("return"),
        seat : getvalue("seat")
    }

    localStorage.setItem("Flight-Menu", JSON.stringify(user))

    alert("Your Flight Tickets In Process || ")
    window.location.href ="/Final-Project/flights/flight_book.html"

}


document.getElementById("form").addEventListener("submit", flightData)

document.getElementById("navbar").innerHTML = navbar()