import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import getvalue from "../components/getvalue.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

const handleData = (e) =>{
    e.preventDefault();
    let data = {
        name : getvalue("name"),
        email : getvalue("email"),
        password : getvalue("password")
    }
}


document.getElementById("form").addEventListener("submit", handleData);