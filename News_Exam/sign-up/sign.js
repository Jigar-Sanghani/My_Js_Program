
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

document.querySelector("#form").addEventListener("submit", signdata);