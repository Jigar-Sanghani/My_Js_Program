import navbar from "../components/navbar.js";


const API = async () => {
    let request = await fetch('https://json-server-2-e6hf.onrender.com/hotel_scheduled');
    let response = await request.json();
    return response;
}

let Hotel_menu = JSON.parse(localStorage.getItem("Hotel-Menu")) || []

const Mapper = async () => {

    let data = await API();

    document.getElementById("productlist").innerHTML = ""
    data.map((ele, index) => {
        let title = document.createElement("h1")
        title.innerHTML = Hotel_menu.city
        let description = document.createElement("h6")
        description.innerHTML = `About : ${ele.description}`
        let image = document.createElement("img")
        image.src = ele.image[2]
        let comment = document.createElement("p")
        comment.innerHTML = ele.comment
        let likes = document.createElement("h6")
        likes.innerHTML = `Likes : ${ele.likes}`;
        let btn_parent = document.createElement("div")
        let btn1 = document.createElement("span")
        btn1.innerHTML = `<i class="fa-solid fa-heart"></i> `
        btn1.addEventListener("click", () => { likehandle(index) })
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Book"
        btn2.addEventListener("click", () => {
            localStorage.setItem("Book-Hotel", JSON.stringify(ele));
            alert("Rooms Book After A Payment ||")
            window.location.href = "/Final-Project/hotels/new.html"
        })
        btn_parent.append(btn1, btn2)
        let cost = document.createElement("h4")
        cost.innerHTML = `Cost : ${ele.cost}`
        let div = document.createElement("div")
        div.append(title, description, image, comment, likes, btn_parent, cost)

        description.classList.add("description")
        image.classList.add("img-fluid");
        div.classList.add("div");
        btn2.classList.add("btn2");
        btn1.classList.add("btn1");
        likes.classList.add("likes");

        
        document.getElementById("productlist").append(div)

    })
}

Mapper();

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


document.getElementById("navbar").innerHTML = navbar();