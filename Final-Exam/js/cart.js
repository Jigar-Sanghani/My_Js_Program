import navbar from "../components/navbar.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Project/signup/signup.html"
}

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})



let cartList = JSON.parse(localStorage.getItem("Book-Food")) || []



const handleDelete = (index) => {

    cartList.splice(index, 1)
    localStorage.setItem("Book-Food", JSON.stringify(cartList))
    alert("This Item Has Been Deleted !!")
    mapper(cartList)
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

    mapper(cartList)
    localStorage.setItem("Book-Food", JSON.stringify(cartList))
}

const mapper =  (data) => {
    document.getElementById("listpage").innerHTML = ""

    let tr = document.createElement("div");

    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.src = data.image;
    td1.append(img)
    img.classList.add("image")


    let td2 = document.createElement("td");
    td2.innerHTML = data.name

    let td3 = document.createElement("td");
    td3.innerHTML = data.caloriesPerServing

    let td4 = document.createElement("td");
    td4.innerHTML = data.rating

    let city = document.createElement("p");
    city.innerHTML = data.city
    let td5 = document.createElement("td");

    let btn1 = document.createElement("button");
    btn1.innerHTML = "-"
    let btn2 = document.createElement("button");

    btn2.innerHTML = data.qty

    let btn3 = document.createElement("button");
    btn3.innerHTML = "+"
    btn1.addEventListener("click", () => handleQty(i, "-"))
    btn3.addEventListener("click", () => handleQty(i, "+"))
    td5.append(btn1, btn2, btn3)

    let td6 = document.createElement("td");
    td6.innerHTML = data.price * data.qty

    let td7 = document.createElement("td");
    td7.innerHTML = "Delete";
    td7.style.cursor = "pointer";
    td7.addEventListener("click", () => handleDelete(i))

    tr.append(td1, td2, td3, td4, city, td5, city, td6, td7)

    document.getElementById("listpage").append(tr)


}

const handleDeleteall = () => {
    document.getElementById("listpage").innerHTML = ""
    cartList = [];
    localStorage.setItem("Book-Food", JSON.stringify(cartList))
    alert("All Item Are Deleted !!")
    mapper(cartList)
}


mapper(cartList)

document.getElementById("all").addEventListener("click", handleDeleteall)
