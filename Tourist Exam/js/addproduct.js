
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()  

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})