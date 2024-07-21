import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const trainData = (e) => {
    e.preventDefault();
    let user = {
        from: getvalue("from"),
        to: getvalue("to"),
        departure: getvalue("departure"),
        return: getvalue("return"),
        seat : getvalue("seat")
    }
    
    localStorage.setItem("Train-Menu", JSON.stringify(user))

    alert("Your Train Booking Successfully || ")
    window.location.href = "/Final-Project/train/train_book.html"

}


document.getElementById("form").addEventListener("submit", trainData)

document.getElementById("navbar").innerHTML = navbar()