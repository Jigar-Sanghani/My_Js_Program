
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar ()


let buslist = JSON.parse(localStorage.getItem("Book-Bus")) || {};
let Bus_Menu = JSON.parse(localStorage.getItem("Bus-Menu")) || []


document.getElementById("image").src = buslist.company_logo
document.getElementById("type").innerHTML = `Bus-Type : ${buslist.company_name}`
document.getElementById("number").innerHTML = `Bus-Number : ${buslist.number}`
document.getElementById("from").innerHTML = `From : ${Bus_Menu.from}`
document.getElementById("to").innerHTML =  ` To : ${Bus_Menu.to}`
document.getElementById("date").innerHTML = `Date : ${Bus_Menu.departure}`
document.getElementById("seat").innerHTML = `Seat : ${Bus_Menu.seat}`
document.getElementById("start").innerHTML =` ${Bus_Menu.from} :  ${buslist.s_time}` 
document.getElementById("end").innerHTML = `${Bus_Menu.to} : ${buslist.e_time}`
document.getElementById("cost").innerHTML = `Price : ${buslist.cost}`
document.getElementById("total").innerHTML = `Total Price : ${Bus_Menu.seat * buslist.cost}`
 

document.getElementById("submit").addEventListener("click", () =>{
    alert("Your Booking Successfull ||")
    window.location.href = "/Final-Project/"
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})