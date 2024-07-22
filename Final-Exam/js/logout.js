import { DeleteUser } from "../components/api.js";
import navbar from "../components/navbar.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Exam/html/signup.html"
}

const API = async () => {
    let request = await fetch(`https://json-server-3-bner.onrender.com/user-exam`);
    let response = await request.json();
    return response;
}



let data = await API();

const id = data.id ;

const deleteUser = async () => {
    DeleteUser(id)
    alert("User Has Deleted ||");
    localStorage.setItem("islogin", false) 
    window.location.href = "/Final-Exam/"
}

document.getElementById("button").addEventListener("click", deleteUser);

document.getElementById("navbar").innerHTML = navbar()
