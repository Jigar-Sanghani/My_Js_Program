import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

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

    alert("Log-In Successfully || ")
    window.location.href ="/Final-Project/"

    // if (userdetails) {

    //     if (userdetails.email != user.email) {
    //         alert("User Not Found  ||" + user.email);
    //     }
    //     else if (userdetails.password != user.password) {
    //         alert("Password Mismatch ||" + user.password);
    //     }
    //     else {
    //         alert("Log-in Successfully || " + user.email);
    //         window.location.href = "/Final-Project/"
    //         localStorage.setItem("isLogin", true)
    //     }
    // }
    // else {
    //     alert("Please Sign Up !!")
    //     window.location.href = "/Final-Project/html/signup.html"
    // }
}


document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("navbar").innerHTML = navbar()