import navbar from "../components/navbar.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Exam/html/signup.html"
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

const mapper = (data) => {
    document.getElementById("jlist").innerHTML = ""


    data.map((ele, i) => {

        
        let image = document.createElement("img")
        image.src = ele.image
        image.classList.add("img-fluid", "image");

        let title = document.createElement("h3")
        title.innerHTML = `Name : ${ele.name}`
        title.classList.add("title")

        let category = document.createElement("h4")
        category.innerHTML = `City : ${ele.city}`
        category.classList.add("category")

        let price = document.createElement("h4")
        price.innerHTML = `Price: ${ele.caloriesPerServing}`
        price.classList.add("price")

        let description = document.createElement("h5")
        description.innerHTML = `Rating : ${ele.rating}`
        description.classList.add("description")

        let btn2 = document.createElement("button")
        btn2.innerHTML = "Book"
        btn2.classList.add("btn2");
        btn2.addEventListener("click", () => {
            alert("This Food Ordered ||")
            window.location.href = "/Final-Exam/"
        })

        let td5 = document.createElement("td");

        let b1 = document.createElement("button");
        b1.innerHTML = "-"
        let b2 = document.createElement("button");

        b2.innerHTML = ele.qty

        let b3 = document.createElement("button");
        b3.innerHTML = "+"
        b1.addEventListener("click", () => handleQty(i, "-"))
        b3.addEventListener("click", () => handleQty(i, "+"))
        td5.append(b1, b2, b3)
        td5.classList.add("td5")


        let btn1 = document.createElement("button")
        btn1.innerHTML = "Delete"
        btn1.classList.add("btn1");
        btn1.addEventListener("click", () => {
            handleDelete(i)
        })


        let td6 = document.createElement("h5");
        td6.innerHTML = `Total Cost : ${ele.caloriesPerServing * ele.qty}`
        td6.classList.add("td6")

        let div = document.createElement("div")
        div.classList.add("div");
        div.append(image, title, category, price, description, btn2, btn1, td5, td6)

        document.getElementById("jlist").append(div)

    })
}

const handleDeleteall = () => {
    document.getElementById("jlist").innerHTML = ""
    cartList = [];
    localStorage.setItem("Book-Food", JSON.stringify(cartList))
    alert("All Item Are Deleted !!")
    mapper(cartList)
        window.location.href = "/Final-Exam/"
}


mapper(cartList)

document.getElementById("allw").addEventListener("click", handleDeleteall)
