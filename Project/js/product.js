import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import getvalue from "../components/getvalue.js";

document.getElementById("navbar").innerHTML = navbar()  
document.getElementById("footer").innerHTML = footer()

let proudcts = JSON.parse(localStorage.getItem("products")) || []

let cartList = JSON.parse(localStorage.getItem("cartList")) || []


let isLogin = localStorage.getItem("isLogin") || false;
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

const isExists = (id) => {
    let temp = cartList.filter((item) => item.id == id)
    return temp.length > 0 ? true : false
}

const handleCartList = (ele) => {

    if (isExists(ele.id)) {

        cartList.map((item, i) => {
            if (item.id == ele.id) {
                cartList[i].qty += 1
            }
        })
        alert("This Product Already Exists !!")
    }
    else {
        // ele.qty =1
        // cartList.push(ele)
        cartList.push({ ...ele, qty: 1 })
        alert("This Product Added To The Cart !!")

    }

    localStorage.setItem("cartList", JSON.stringify(cartList))

}

const Mapper = (data) => {
    document.getElementById("productList").innerHTML = ""
    data.map((ele) => {
        let img = document.createElement("img")
        img.src = ele.img
        img.style.margin="05%"
        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let category = document.createElement("p")
        category.innerHTML = ele.category
        let btn = document.createElement("button")
        btn.innerHTML = "Buy"
        btn.addEventListener("click", () => handleCartList(ele))
        btn.style.margin="05%"
        btn.style.borderRadius="05px"
        let div = document.createElement("div")
        div.append(img, title, price, category, btn)
        div.style.margin="05%"
        div.style.border="1px solid black"
        div.style.borderRadius="10px"
        document.getElementById("productList").append(div)
    })
}

Mapper(proudcts)


const HandleSort = (orderBy) => {
    if (orderBy == "LTH") {
        let temp = proudcts.sort((a, b) => a.price - b.price)
        Mapper(temp)
        console.log(temp);
    }
    else {
        let temp = proudcts.sort((a, b) => b.price - a.price)
        console.log(temp);
        Mapper(temp)
    }

}

const handleFilter = (category) => {
    let temp = proudcts.filter((ele) => ele.category == category)
    Mapper(temp)

}

const handleSearch = (value) => {
    let temp = proudcts.filter((ele) => ele.title.includes(value))
    Mapper(temp)
}



const handleSearchData = (e) => {
    e.preventDefault()

    let value = getvalue("searchValue")

    handleSearch(value)

}


const handleInput = (e) => {
    let value = getvalue("searchValue")
    handleSearch(value)
    // if(e.key=="Enter"){
    //     let value = getvalue("searchValue")
    //     handleSearch(value)
    // }

}

document.getElementById("searchValue").addEventListener("keypress", handleInput)
document.getElementById("searching").addEventListener("submit", handleSearchData)

document.getElementById("LTH").addEventListener("click", () => HandleSort("LTH"))
document.getElementById("HTL").addEventListener("click", () => HandleSort("HTL"))

document.getElementById("men").addEventListener("click", () => handleFilter("men"))
document.getElementById("women").addEventListener("click", () => handleFilter("women"))
document.getElementById("kids").addEventListener("click", () => handleFilter("kids"))