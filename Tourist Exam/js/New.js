import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar ()


let movList = JSON.parse(localStorage.getItem("Book")) || {};

document.getElementById("img1").src = movList.image[0]
document.getElementById("img2").src = movList.image[1]
document.getElementById("img3").src = movList.image[2]
document.getElementById("title").innerHTML = movList.title
document.getElementById("about").innerHTML = movList.description
document.getElementById("cost").inertia = movList.cost

const handle = (e) => {
    e.preventDefault();
    let comment = document.getElementById("commentInput").value 
    document.getElementById("comment").innerHTML = comment
}

document.getElementById("form").addEventListener("submit", handle);