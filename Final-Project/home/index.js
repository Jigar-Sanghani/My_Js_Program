import navbar from "../components/navbar.js";

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            API({lat, lon}, false);
        });
    } else {
        alert("Your Location Is Disabled || "); 
    }
}

let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    window.location.href = "/Final-Project/signup/signup.html"
}

window.addEventListener("load", getLocation);

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


document.getElementById("navbar").innerHTML = navbar()