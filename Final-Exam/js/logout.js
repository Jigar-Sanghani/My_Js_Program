import { DeleteUser } from "../components/api.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";



let is_login = localStorage.getItem("is_login") || false;
if (!is_login) {
    window.location.href = "/Final/html/signup.html"
}


const handleData = (e) => {
    e.preventDefault();

    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }


    console.log(user.email);

    DeleteUser(user.email)
    alert("User Has Deleted ||");
    localStorage.setItem("islogin", false)
    window.location.href = "/Final/"
}

document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("navbar").innerHTML = navbar()
