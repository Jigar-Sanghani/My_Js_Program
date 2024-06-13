import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";



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