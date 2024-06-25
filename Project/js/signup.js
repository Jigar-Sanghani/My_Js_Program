import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";



let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("user")) || []
if (!isLogin) {
    // window.location.href = "/Project/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}

const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("name"),
        email: getvalue("email"),
        image: getvalue("image"),
        password: getvalue("password")
    }

    localStorage.setItem("User-Data", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/Project/"
    alert("Sign-Up Successfully !!")

}


document.getElementById("form").addEventListener("submit", handleData)



document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()