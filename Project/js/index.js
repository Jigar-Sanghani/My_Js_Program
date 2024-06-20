

import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import slider from "../components/slider.js";

document.getElementById("navbar").innerHTML = navbar()  
document.getElementById("footer").innerHTML = footer()
document.getElementById("slider").innerHTML = slider()


let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("user")) || []
if (!isLogin) {
    window.location.href = "/Project/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}