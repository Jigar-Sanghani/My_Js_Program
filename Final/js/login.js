import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { login } from "../components/api.js";


let is_login = localStorage.getItem("is_login") || false;
if (!is_login) {
    window.location.href = "/Final/html/signup.html"
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }
    
    console.log(user);
    login(user);
    localStorage.setItem("is_login", true)   

}


document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("navbar").innerHTML = navbar()