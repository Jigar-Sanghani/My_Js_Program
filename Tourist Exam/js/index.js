import getvalue from "../components/getvalue.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

let data = [
    {
        id: 1,
        title: "Delhi",
        description: "Delhi is the capital city of India. It is the most populous city in India.",
        image: [
            "https://i.ytimg.com/vi/OUPTGDrXDy4/maxresdefault.jpg",
            "https://media.cntraveller.com/photos/611bed6df902cc2d167b42bc/16:9/w_2580,c_limit/gettyimages-962826702.jpg",
            "https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg",
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_1 `)) || 0,
        cost: 10000
    },
    {
        id: 2,
        title: "Mumbai",
        description: "Mumbai is the capital city of India. It is the most populous city in India.",
        image: [
            "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/1200px-Mumbai_Aug_2018_%2843397784544%29.jpg",
            "https://www.nationsonline.org/gallery/India/Gateway-of-India.jpg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_2 `)) || 0,
        cost: 15000
    },
    {
        id: 3,
        title: "Bangalore",
        description: "Bangalore is the capital city of India. It is the most populous city in India.",
        image: [
            "https://cdn.britannica.com/35/142635-050-8828F21A/Parkland-building-High-Court-Vidhana-Soudha-Karnataka.jpg",
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/03/11/bengaluru.jpg",
            "https://static.toiimg.com/photo/62507296.cms"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_3 `)) || 0,
        cost: 15000
    },
    {
        id: 4,
        title: "Chennai",
        description: "Chennai is the capital city of India. It is the most populous city in India.",
        image: [
            "https://www.agoda.com/wp-content/uploads/2024/03/Chennai-India-1049x700.jpg",
            "https://static.toiimg.com/thumb/width-600,height-400,msid-24531101.cms",
            "https://lp-cms-production.imgix.net/2019-06/f142b3016a4a4bb7bb7c20b1aa38a7c6-chennai-madras.jpg?sharp=10&vib=20&w=1200&w=600&h=400"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_4 `)) || 0,
        cost: 10000
    },
    {
        id: 5,
        title: "Kolkata",
        description: "Kolkata is the capital city of India. It is the most populous city in India.",
        image: [
            "https://sundayguardianlive.com/wp-content/uploads/2021/04/Prasenjit-K-Basu_Kolkata.jpg",
            "https://cdn.enjoytravel.com/img/travel-news/kolkata-was-previously-called-calcutta.jpg",
            "https://media.gettyimages.com/id/536118160/it/foto/howrah-bridge-in-kolkata.jpg?s=612x612&w=gi&k=20&c=yz7chnnK70TnyP5qYD7Qp4WKLT2ahO85P-WL3o-OhfM="
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_5 `)) || 0,
        cost: 20000
    },
    {
        id: 6,
        title: "Hyderabad",
        description: "Hyderabad is the capital city of India. It is the most populous city in India.",
        image: [
            "https://static.toiimg.com/thumb/msid-92654212,width-748,height-499,resizemode=4,imgsize-128652/.jpg ",
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/05/16/11/laurahyatt220417-28.jpg?width=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpSznRdkR50ahX6W7rJpw3KvaPeA6_rVwpg&s"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_6 `)) || 0,
        cost: 12000
    }
]

let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("user")) || []
if (!isLogin) {
    window.location.href = "/html/signup.html"
}

let countLike = 0
let countLikeServer = localStorage.getItem('countLike') || 0
const likehandle = (index) => {
    data[index].likes += 1;
    let likesElement = document.getElementsByClassName("likes")[index];
    if (likesElement) {
        likesElement.innerHTML = ` Like: ${data[index].likes}`;
    }
    localStorage.setItem(`likes_${data[index].id}`, JSON.stringify(data[index].likes));
}

let places =[]

const Mapper = (data) => {
    document.getElementById("productlist").innerHTML = ""
    data.map((ele,index) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let description = document.createElement("h6")
        description.innerHTML = `About : ${ele.description}`
        let image = document.createElement("img")
        image.src = ele.image[1]
        let comment = document.createElement("p")
        comment.innerHTML = ele.comment
        let likes = document.createElement("h6")
        likes.innerHTML = `Like : ${ele.likes}`
        let btn_parent = document.createElement("div")
        let btn1 = document.createElement("span")
        btn1.innerHTML = `<i class="fa-solid fa-heart"></i> `
        btn1.addEventListener("click", () => { likehandle(index) })
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Book"
        btn2.addEventListener("click",()=>{
            localStorage.setItem("Book",JSON.stringify(ele));
            window.location.href = "/html/New.html"
        })
        btn_parent.append(btn1, btn2)
        let cost = document.createElement("h4")
        cost.innerHTML = `Cost : ${ele.cost}`
        let div = document.createElement("div")
        div.append(title, description, image, comment, likes, btn_parent, cost)

        image.classList.add("img-fluid")
        div.classList.add("div")
        btn2.classList.add("btn2")
        btn1.classList.add("btn1")
        likes.classList.add("likes")

        places.push(div)

        document.getElementById("productlist").append(div)

    })
}
Mapper(data)

// const HandleSort = (orderBy) => {
//     if (orderBy == places.likes) {
//         let temp = places.sort((a, b) => a.price - b.price)
//         Mapper(temp)
//         console.log(temp);
//     }
//     else {
//         let temp = places.sort((a, b) => b.price - a.price)
//         console.log(temp);
//         Mapper(temp)
//     }

// }

// const handleSearch = (value) => {
//     let temp = places.filter((ele) => ele.title.includes(value))
//     Mapper(temp)
// }



// const handleSearchData = (e) => {
//     e.preventDefault()

//     let value = getvalue("searchValue")

//     handleSearch(value)

// }


// const handleInput = (e) => {
//     let value = getvalue("searchValue")
//     handleSearch(value)
// }

// document.getElementById("searchValue").addEventListener("keypress", handleInput)
// document.getElementById("searching").addEventListener("submit", handleSearchData)
// document.getElementById("LTH_l").addEventListener("click", () => HandleSort("LTH_l"))
// document.getElementById("HTL_l").addEventListener("click", () => HandleSort("HTL_l"))
// document.getElementById("LTH_c").addEventListener("click", () => HandleSort("LTH_c"))
// document.getElementById("HTL_c").addEventListener("click", () => HandleSort("HTL_c"))