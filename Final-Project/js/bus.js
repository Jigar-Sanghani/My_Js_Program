import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const busData = (e) => {
    e.preventDefault();
    let user = {
        from: getvalue("from"),
        to: getvalue("to"),
        departure: getvalue("departure"),
        return: getvalue("return"),
        seat : getvalue("seat")
    }

    alert("Your Bus Booking Successfully || ")
    window.location.href ="/Final-Project/"

}


document.getElementById("form").addEventListener("submit", busData)

document.getElementById("navbar").innerHTML = navbar()