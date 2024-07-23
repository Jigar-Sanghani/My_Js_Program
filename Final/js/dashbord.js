import navbar from "../components/navbar.js";



let is_login = localStorage.getItem("is_login") || false;
if (!is_login) {
    window.location.href = "/Final/html/signup.html"
}

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


let cartList = JSON.parse(localStorage.getItem("course-data")) || []



const Mapper = (data) => {


    document.getElementById("jlist").innerHTML = ""
    data.map((ele, i) => {
        let image = document.createElement("img")
        image.src = ele.image
        image.classList.add("img-fluid", "image");

        let title = document.createElement("h3")
        title.innerHTML = `Name : ${ele.name}`
        title.classList.add("title")

        let category = document.createElement("h4")
        category.innerHTML = `Category : ${ele.category}`
        category.classList.add("category")

        let price = document.createElement("h4")
        price.innerHTML = `Price: ${ele.actual_price_usd}`
        price.classList.add("price")

        let description = document.createElement("h5")
        description.innerHTML = `Description : ${ele.description}`
        description.classList.add("description")

        let btn2 = document.createElement("button")
        btn2.innerHTML = "Book"
        btn2.classList.add("btn2");
        btn2.addEventListener("click", () => {
            alert("This Course Permanent Successfully ||")
            window.location.href = "/Final/"
        })

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Delete"
        btn1.classList.add("btn1");
        btn1.addEventListener("click", () => {
            handleDelete(i)
        })


        let td6 = document.createElement("td");
        td6.innerHTML = data.price * data.qty

        let div = document.createElement("div")
        div.classList.add("div");
        div.append(image, title, category, price, description, btn2, btn1)

        document.getElementById("jlist").append(div)
    })

}


const handleDelete = (index) => {

    cartList.splice(index, 1)
    localStorage.setItem("course-data", JSON.stringify(cartList))
    alert("This Item Has Been Deleted !!")
    window.location.href = "/Final/"
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
    localStorage.setItem("course-data", JSON.stringify(cartList))
}


const handleDeleteall = () => {
    document.getElementById("jlist").innerHTML = ""
    cartList = [];
    localStorage.setItem("course-data", JSON.stringify(cartList))
    alert("All Item Are Deleted !!")
    window.location.href = "/Final/"
    Mapper(cartList)
}

document.getElementById("allw").addEventListener("click", handleDeleteall)

Mapper(cartList);