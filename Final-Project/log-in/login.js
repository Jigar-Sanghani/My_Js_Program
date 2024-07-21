import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { login } from "../components/api.js";


let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Final-Project/signup/signup.html"
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

    login(user);
    
    localStorage.setItem("isLogin", true)

}


document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("navbar").innerHTML = navbar()