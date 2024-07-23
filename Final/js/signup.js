
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

    // console.log(user.admin);
    createUser(user);
    localStorage.setItem("is_login", true)
    localStorage.setItem("user", JSON.stringify(user.admin))

}


document.getElementById("form").addEventListener("submit", handleData)


document.getElementById("navbar").innerHTML = navbar()
