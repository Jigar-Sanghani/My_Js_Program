import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Final-Project/signup/signup.html"
}

const hotelData = (e) => {
    e.preventDefault();
    let user = {
        name: getvalue("name"),
        city: getvalue("city"),
        check_in: getvalue("check-in"),
        check_out: getvalue("check-out"),
        room : getvalue("room")
    }

    localStorage.setItem("Hotel-Menu", JSON.stringify(user))
    alert("Your Hotel Booking Successfully || ")
    window.location.href ="/Final-Project/hotels/hotel_book.html"

}


document.getElementById("form").addEventListener("submit", hotelData)

document.getElementById("navbar").innerHTML = navbar()