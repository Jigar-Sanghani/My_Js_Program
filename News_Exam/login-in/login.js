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

document.querySelector("#form").addEventListener("submit", logindata);