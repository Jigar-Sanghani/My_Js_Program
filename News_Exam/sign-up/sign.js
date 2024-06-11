<<<<<<< HEAD

const signdata = (e) => {
    e.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        image: document.querySelector("#image").value,
        select: document.querySelector("#select").value
    }
    localStorage.setItem("Sign-In : ", JSON.stringify(data))
}

=======

const signdata = (e) => {
    e.preventDefault();
    let data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        image: document.querySelector("#image").value,
        select: document.querySelector("#select").value
    }
    localStorage.setItem("Sign-In : ", JSON.stringify(data))
}

>>>>>>> 1b0a616dc40affdce3280f601b42a0740f904bcf
document.querySelector("#form").addEventListener("submit", signdata);