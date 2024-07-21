
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar ()


let trainlist = JSON.parse(localStorage.getItem("Book-Flight")) || {};
let train_menu = JSON.parse(localStorage.getItem("Flight-Menu")) || []
    

document.getElementById("image").src = trainlist.company_logo
document.getElementById("type").innerHTML = `Flight-Company : ${trainlist.company_name}`
document.getElementById("number").innerHTML = `Flight-Number : ${trainlist.number}`
document.getElementById("from").innerHTML = `From : ${train_menu.from}`
document.getElementById("to").innerHTML =  ` To : ${train_menu.to}`
document.getElementById("date").innerHTML = `Date : ${train_menu.departure}`
document.getElementById("seat").innerHTML = `Seat : ${train_menu.seat}`
document.getElementById("start").innerHTML =` ${train_menu.from} :  ${trainlist.s_time}` 
document.getElementById("end").innerHTML = `${train_menu.to} : ${trainlist.e_time}`
document.getElementById("cost").innerHTML = `Price : ${trainlist.cost}`
document.getElementById("total").innerHTML = `Total Price : ${train_menu.seat * trainlist.cost}`
 

document.getElementById("submit").addEventListener("click", () =>{
    alert("Your Booking Successfull ||")
    window.location.href = "/Final-Project/"
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})