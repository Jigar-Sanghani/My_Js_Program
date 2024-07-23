
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
        name: getvalue("name"),
        email: getvalue("email"),
        password: getvalue("password"),
        admin : getvalue("admin")
    }

    console.log(user);
    createUser(user);
    localStorage.setItem("is_login", true)

}


document.getElementById("form").addEventListener("submit", handleData)


document.getElementById("navbar").innerHTML = navbar()
