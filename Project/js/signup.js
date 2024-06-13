import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";



const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getvalue("username"),
        email: getvalue("email"),
        password: getvalue("password")
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/Project/index.html"

}


document.getElementById("form").addEventListener("submit", handleData)



document.getElementById("navbar").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()