import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";
import { createUser } from "../components/api.js";

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

    createUser(user);
    localStorage.setItem("islogin", true)

}


document.getElementById("form").addEventListener("submit", handleData)


document.getElementById("navbar").innerHTML = navbar()