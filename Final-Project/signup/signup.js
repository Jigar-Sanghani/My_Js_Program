import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("name"),
        email: getvalue("email"),
        state: getvalue("state"),
        password: getvalue("password")
    }

    alert("Sign-Up Successfully || ")
    window.location.href ="/Final-Project/"

}


document.getElementById("form").addEventListener("submit", handleData)


document.getElementById("navbar").innerHTML = navbar()