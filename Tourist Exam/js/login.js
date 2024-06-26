import getvalue from "../components/getvalue.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("User-Data")) || []
if (!isLogin) {
    window.location.href = "/html/signup.html"
}
const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }
    if(userdetails){
        if (userdetails.email != user.email) {
            alert("User Not Found  !!" + user.email);
        }
        else if (userdetails.password != user.password) {
            alert("Password Mismatch !!" + user.password);
        }
        else {
            alert("Log-in Successfully !! " + user.email);
            document.getElementById("navbar").innerHTML = navbar()
            window.location.href = "/index.html"
            localStorage.setItem("isLogin", true)
        }
    }
    else {
        alert("Please Sign Up !!")
        window.location.href = "/html/signup.html"
    }
}


document.getElementById("form").addEventListener("submit", handleData)