
import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
document.getElementById("footer").innerHTML = footer()

let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));
if (!isLogin) {
    window.location.href = "/Project/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}


let products = JSON.parse(localStorage.getItem("products")) || []

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: getValue("title"),
        price: getValue("price"),
        img: getValue("image"),
        category: getValue("category"),
        id: products.length == 0 ? 1 : products[products.length - 1].id + 1
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
}



document.getElementById("form").addEventListener("submit", handleData)