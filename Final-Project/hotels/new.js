
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar ()


let hotellist = JSON.parse(localStorage.getItem("Book-Hotel")) || {};
let Hotel_Menu = JSON.parse(localStorage.getItem("Hotel-Menu")) || []

document.getElementById("img1").src = hotellist.image[0]
document.getElementById("img2").src = hotellist.image[1]
document.getElementById("img3").src = hotellist.image[2]
document.getElementById("type").innerHTML = `Your Name : ${Hotel_Menu.name}`
document.getElementById("number").innerHTML = `City : ${Hotel_Menu.city}`
document.getElementById("from").innerHTML = ` Check-In  : ${Hotel_Menu.check_in}`
document.getElementById("to").innerHTML =  `  Check-Out : ${Hotel_Menu.check_out}`
document.getElementById("date").innerHTML = ` Rooms : ${Hotel_Menu.room}`
document.getElementById("cost").innerHTML = `Price : ${hotellist.cost}`
document.getElementById("total").innerHTML = `Total Price : ${Hotel_Menu.room * hotellist.cost}`
document.getElementById("seat").innerHTML = `Description : ${hotellist.description}`
 

document.getElementById("submit").addEventListener("click", () =>{
    alert("Your Booking Successfull ||")
    window.location.href = "/Final-Project/"
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})