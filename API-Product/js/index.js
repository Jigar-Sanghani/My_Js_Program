
let isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    window.location.href = "/Project/html/signup.html"
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})