<<<<<<< HEAD
let login_array = JSON.parse(localStorage.getItem(`data`)) || {};

const logindata = (e) => {
    e.preventDefault();

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let semail = login_array.email
    let spassword = login_array.password

    if (email == semail && password == spassword) {
        alert("Login Successfully")
        window.location.href = "index.html";
    }
    else {
        alert("Login Failed !!")
    }
}

=======
let login_array = JSON.parse(localStorage.getItem(`data`)) || {};

const logindata = (e) => {
    e.preventDefault();

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let semail = login_array.email
    let spassword = login_array.password

    if (email == semail && password == spassword) {
        alert("Login Successfully")
        window.location.href = "index.html";
    }
    else {
        alert("Login Failed !!")
    }
}

>>>>>>> 1b0a616dc40affdce3280f601b42a0740f904bcf
document.querySelector("#form").addEventListener("submit", logindata);