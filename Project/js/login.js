import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";


let userdetails = JSON.parse(localStorage.getItem("user"));
document.getElementById("navbar").innerHTML = navbar()
const handleData = (e) => {
    e.preventDefault();
    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }


    if (userdetails) {

        if (userdetails.email != user.email) {
            alert("User Not Found  !!" + user.email);
        }
        else if (userdetails.password != user.password) {
            alert("Password Mismatch !!" + user.password);
        }
        else {
            alert("Log-in Successfully !! " + user.email);
            document.getElementById("navbar").innerHTML = navbar()
            window.location.href = "/Project/"
            localStorage.setItem("isLogin", true)
        }
    }
    else {
        alert("Please Sign Up !!")
        window.location.href = "/Project/html/signup.html"
    }
}


document.getElementById("form").addEventListener("submit", handleData)

document.getElementById("footer").innerHTML = footer()