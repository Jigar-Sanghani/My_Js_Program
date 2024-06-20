import footer from "../components/footer.js";
import navbar from "../components/navbar.js";

document.getElementById("footer").innerHTML = footer()

let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("user")) || []
if (!isLogin) {
    window.location.href = "/Project/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}


const handleDelete = (index) => {

    cartList.splice(index, 1)
    localStorage.setItem("cartList", JSON.stringify(cartList))
    alert("This Item Has Been Deleted !!")
    Mapper(cartList)
}


const handleQty = (index, opr) => {

    if (opr == "+") {
        cartList[index].qty += 1
    }
    else {

        if (cartList[index].qty == 1) {

            alert("Sorry Atlist 1 Qty Required !!")
            handleDelete(index)
        }
        else {
            cartList[index].qty -= 1
        }

    }

    Mapper(cartList)
    localStorage.setItem("cartList", JSON.stringify(cartList))
}


const Mapper = (cartList) => {
    document.getElementById("list").innerHTML = ""
    cartList.map((cart, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = cart.img;
        td1.append(img)

        let td2 = document.createElement("td");
        td2.innerHTML = cart.title

        let td3 = document.createElement("td");
        td3.innerHTML = cart.category

        let td4 = document.createElement("td");
        td4.innerHTML = cart.price

        let td5 = document.createElement("td");

        let btn1 = document.createElement("button");
        btn1.innerHTML = "-"
        let btn2 = document.createElement("button");

        btn2.innerHTML = cart.qty

        let btn3 = document.createElement("button");
        btn3.innerHTML = "+"
        btn1.addEventListener("click", () => handleQty(i, "-"))
        btn3.addEventListener("click", () => handleQty(i, "+"))
        td5.append(btn1, btn2, btn3)

        let td6 = document.createElement("td");
        td6.innerHTML = cart.price * cart.qty

        let td7 = document.createElement("td");
        td7.innerHTML = "Delete";
        td7.style.cursor = "pointer";
        td7.addEventListener("click", () => handleDelete(i))

        tr.append(td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("list").append(tr)
    })

}

const handleDeleteall = () =>{
    document.getElementById("list").innerHTML = ""
    cartList = [];
    localStorage.setItem("cartList", JSON.stringify(cartList))
    alert("All Item Are Deleted !!")
    Mapper(cartList)
}


Mapper(cartList)

document.getElementById("all").addEventListener("click",handleDeleteall)