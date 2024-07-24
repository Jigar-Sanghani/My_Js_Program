import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { login } from "../components/api.js";


let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
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
    

}


document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("navbar").innerHTML = navbar()