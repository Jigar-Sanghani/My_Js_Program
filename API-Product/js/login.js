
import { Is_Exists, Login_user } from "../components/api.js";
import getvalue from "../components/getvalue.js";


if (!isLogin) {
    window.location.href = "/API-Product/html/signup.html"
}

const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }

    Login_user(user)

    if (userdetails) {

        if (userdetails.email != user.email) {
            alert("User Not Found  !!" + user.email);
        }
        else if (userdetails.password != user.password) {
            alert("Password Mismatch !!" + user.password);
        }
        else {
            alert("Log-in Successfully !! " + user.email);
            window.location.href = "/API-Product/index.html"
             isLogin = Is_Exists(user.email)
        }
    }
    else {
        alert("Please Sign Up !!")
        window.location.href = "/API-Product/html/signup.html"
    }
}


document.getElementById("form").addEventListener("submit", handleData)

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})