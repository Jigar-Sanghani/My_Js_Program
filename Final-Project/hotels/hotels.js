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
    alert("Your Hotel Tickets In Process || ")
    window.location.href ="/Final-Project/hotels/hotel_book.html"

}


document.getElementById("form").addEventListener("submit", hotelData)

document.getElementById("navbar").innerHTML = navbar()