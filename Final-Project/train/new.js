
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar ()


let trainlist = JSON.parse(localStorage.getItem("Book-Train")) || {};
let Train_Menu = JSON.parse(localStorage.getItem("Train-Menu")) || []


document.getElementById("image").src = trainlist.company_logo
document.getElementById("type").innerHTML = `Bus-Type : ${trainlist.company_name}`
document.getElementById("number").innerHTML = `Bus-Number : ${trainlist.number}`
document.getElementById("from").innerHTML = `From : ${Train_Menu.from}`
document.getElementById("to").innerHTML =  ` To : ${Train_Menu.to}`
document.getElementById("date").innerHTML = `Date : ${Train_Menu.departure}`
document.getElementById("seat").innerHTML = `Seat : ${Train_Menu.seat}`
document.getElementById("start").innerHTML =` ${Train_Menu.from} :  ${trainlist.s_time}` 
document.getElementById("end").innerHTML = `${Train_Menu.to} : ${trainlist.e_time}`
document.getElementById("cost").innerHTML = `Price : ${trainlist.cost}`
document.getElementById("total").innerHTML = `Total Price : ${Train_Menu.seat * trainlist.cost}`
 

document.getElementById("submit").addEventListener("click", () =>{
    alert("Your Booking Successfull ||")
    window.location.href = "/Final-Project/"
})

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})