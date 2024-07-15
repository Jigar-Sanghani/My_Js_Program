
import { Create_User, Is_Exists } from "../components/api.js";
import getvalue from "../components/getvalue.js";

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("name"),
        email: getvalue("email"),
        image: getvalue("image"),
        password: getvalue("password")
    }

    let islogin = Is_Exists(user.email)
    window.location.href = "API-Product/index.html"
    alert("Sign-Up Successfully !!")

    Create_User(user)

}


document.getElementById("form").addEventListener("submit", handleData)