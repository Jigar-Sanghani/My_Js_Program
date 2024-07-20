import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const flightData = (e) => {
    e.preventDefault();
    let user = {
        from: getvalue("from"),
        to: getvalue("to"),
        departure: getvalue("departure"),
        return: getvalue("return"),
        seat : getvalue("seat")
    }

    alert("Your Flight Booking Successfully || ")
    window.location.href ="/Final-Project/html/new.html"

}


document.getElementById("form").addEventListener("submit", flightData)

document.getElementById("navbar").innerHTML = navbar()