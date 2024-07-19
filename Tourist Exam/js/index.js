
import getvalue from "../components/getvalue.js";
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let data = [
    {
        id: 1,
        title: "Thailand",
        description: "Thailand, officially the Kingdom of Thailand and historically known as Siam (the official name until 1939), is a country in Southeast Asia.",
        image: [
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3P-P4BvkyvX4qoq-_W233UjEGQpC8okQtaNqMkEUXhasf29WIllhfZV0jTH0muKum9L3kdjbEveXtAhvGrslAnUpKRNHEdkOG4OYJPw",
            "https://lh5.googleusercontent.com/p/AF1QipPCnjdVW-rvr0yppzTCkX_1S9bXB3wYVvBVaUiB=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipNnbbd68-sKGsSREeIkT9UTqnKTgEKFRBbXMlKX=w810-h468-n-k-no",
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_1`)) || 0,
        cost: 10000
    },
    {
        id: 2,
        title: "Bangkok",
        description: "Explore Bangkok · See & Do · Shop · Food · Stay · Festival & Event · Spa & Wellness · Tour Agent · Recreational & Entertainmen.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipMF-ocWKAetApFQh-i2hmgdKQZTXKkxAXTVjqAL=w810-h468-n-k-no",
            "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTn9KLcrR7V6d_pKOqoGcMx0OWR2H-qUiWDnJaMjYPJSNX1vraiGTvNhgkbmbQl_mcidjYcz45XZrNr0Jg5uGxZdgUq9PUIF1AjykN2Ng",
            "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR40d-dR5SYg5AgXpDdCW35saYQzlunY2J201gXSg9Uaa6GgM9EXggxrBdCcko5-kB2ze-VlzGCO53FcusxhF1fANLMD6bhq4wjeXbqTw"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_2`)) || 0,
        cost: 15000
    },
    {
        id: 3,
        title: "Maldives",
        description: "The Maldives is the smallest country in Asia. Including the sea, the territory spans roughly 90,000 square kilometres.",
        image: [
            "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSqFv-EB2QF31wR8QNauMUrl2vleQOCOA9WngvtOs3-11IbdHdPi7afLJ0GrTwo4XCya-eh_5erHixBgC6n8C5v_B-iDro386r9_6b8Lw ",
            "https://lh5.googleusercontent.com/p/AF1QipPtUhrlLIfIvS5X-8xKoW1xaI23gHcP-PhOwuMJ=w810-h468-n-k-no",
            "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRAuRJbaubCe8pwkWPayvwk0nX7gIAJtLsBetJaGvo62IKjw7DzhgGZOn1tRNnt7vdaB_-WvjIT337MK1xJdcGHn9Z_jO6smKckV90FpQ"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_3`)) || 0,
        cost: 12000
    },
    {
        id: 4,
        title: "Malaysia",
        description: "Malaysia is a country in Southeast Asia. The federal constitutional monarchy consists of 13 states and three federal territories",
        image: [
            "https://lh4.googleusercontent.com/proxy/rK3Dfr_vTnHZEy9k1y4lid_4NPPYNkbIWQ5y6J2xcHk1DRGCIx-yj-oOFQDTJmoceMydk7wR86VqtBkqm6YTUevWqd337XHtYkY39wYVRpQ_BakkArjMexMwNjlKaNAJy5cn8vqABRlY9Jf52E_s0nU_jyY0ww=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipPrhzqLbv9f4QnKQNFisJw2VoXbUEpjouVjvS1b=w810-h468-n-k-no",
            "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTAJ_tZ2zZDrPUXoIJhFelFSWxvtCbmxjFwpzOZdm5uSnH_g8cMzqFjW-kDexkLGa1xsp7bP20XypYA747FHuVpZF5ufKFhFslfwAeUfA"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_4`)) || 0,
        cost: 10000
    },
    {
        id: 5,
        title: "Goa",
        description: "Goa covers an area of 3702 square kilometers and comprises two Revenue district viz North Goa and South Goa.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipPI-KJH8jWecrgce0ItKscubeoCH7Lghtl5yPLG=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipNdh6s-FIUe1bNNbrZ-N3jxuj-UFJQ0fsvQHhkZ=w810-h468-n-k-no",
            "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRYUKMLmf6Cj_FuyQkxhQUkctKAFbRk_mZX6vSLrcWtxZKPgnU0ThNs9VJpB_yPOimn8cX1E8szj7Oo7ghfNT6-CQ44F_zcBF4yzIcxBg"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_5`)) || 0,
        cost: 20000
    },
    {
        id: 6,
        title: "Singapore",
        description: "Singapore, officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia.",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipOESve-by1VcqtrfnN2XEgjIe7FOmkV7qMyrkpg=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipP-SeCTqcHRHkXCjcB6bhbpdEvnBG2hh7V0C-NO=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/p/AF1QipMAHLFfaj0cuB4GH0se2s5CS89ZF8NQqh4_MxXn=w810-h468-n-k-no"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_6`)) || 0,
        cost: 15000
    },
    {
        id: 7,
        title: "Hong Kong",
        description: "Hong Kong is a special administrative region of the People's Republic of China. With 7.4 million .",
        image: [
            "https://lh5.googleusercontent.com/p/AF1QipOtUzHxfhjNLwjGZPbiDIvfa77VJmx-KcxdupzX=w810-h468-n-k-no",
            "https://lh5.googleusercontent.com/proxy/bo76Tx10Gw-F4bYfE1CCrfFs-pxkw9aAZB3IB5-smibEiWMaMrGLqvUbWr21cnWZdYHqNsn-CBnq0oenWpbX9bFRwORZoNxNBHIpRBphOeQCxV1QkhzadVgpCfMCgFdS6EWjs2FeQuSYP8MXAUIbtr0b1_MXHA=w810-h468-n-k-no",
            "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQe_GJ_v0rUcpLCd7EmvSpG_mEqzFvpP-qftzKR-HVvWi7pPOMtis9RtyGUKNrx_yadwVldMiF0-_wGTlc5rbY7LvAwC8mGS8CwTnFvJQ"
        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_7`)) || 0,
        cost: 15000
    },
    {
        id: 8,
        title: "Sydney",
        description: "Sydney is the capital city of the state of New South Wales and the most populous city in Australia.",
        image: [
            "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSwTMD2PDfq9fEyfKnlRkHvrBcRsjHWAMlWFBZ780nYQH3gbQ0PNW7ngOTZuiUu7JEh_Z_KejLbbM1M5u71FjNs__YkDORkXCNtQUpqtA",
            "https://lh5.googleusercontent.com/p/AF1QipMHftgSCBlvyjxYphi4gLqDC_62WWvZvyy1EBuh=w810-h468-n-k-no",
            "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSZebes8t2FPbDoIMj_JYpA_eYYN--CQdkZ8sRKjKmZfm9R-p2rLAbe3YNGeOm9IFAjuOVnqJ4xkQLCfjcWE4zhIVwboTDVY_i2XTfLxQ"

        ],
        comment: "",
        likes: JSON.parse(localStorage.getItem(`likes_8`)) || 0,
        cost: 10000
    }
]

let isLogin = localStorage.getItem("isLogin") || false;
let cartList = JSON.parse(localStorage.getItem("cartList")) || []
let userdetails = JSON.parse(localStorage.getItem("user")) || []
if (!isLogin) {
    window.location.href = "/Tourist%20Exam/html/signup.html"
}

let countLike = 0
let countLikeServer = localStorage.getItem('countLike') || 0
const likehandle = (index) => {
    data[index].likes += 1;
    let likesElement = document.getElementsByClassName("likes")[index];
    if (likesElement) {
        likesElement.innerHTML = ` Likes : ${data[index].likes}`;
    }
    localStorage.setItem(`likes_${data[index].id}`, JSON.stringify(data[index].likes));
}


const Mapper = (data) => {
    document.getElementById("productlist").innerHTML = ""
    data.map((ele, index) => {
        let title = document.createElement("h1")
        title.innerHTML = ele.title
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
            localStorage.setItem("Book", JSON.stringify(ele));
            window.location.href = "/Tourist%20Exam/html/New.html"
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

document.getElementById("LTH_c").addEventListener("click", () => {
    data.sort((a, b) => a.cost - b.cost);
    Mapper(data)
});

document.getElementById("HTL_c").addEventListener("click", () => {
    data.sort((a, b) => b.cost - a.cost);
    Mapper(data)
});

document.getElementById("LTH_l").addEventListener("click", () => {
    data.sort((a, b) => a.likes - b.likes);
    Mapper(data)
});

document.getElementById("HTL_l").addEventListener("click", () => {
    data.sort((a, b) => b.likes - a.likes);
    Mapper(data)
});
Mapper(data)


const handleSearch = (value) => {
    let temp = data.filter((ele) => ele.title.includes(value))
    Mapper(temp)
}



const handleSearchData = (e) => {
    e.preventDefault()

    let value = getvalue("searchValue")

    handleSearch(value)

}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const handleInput = (e) => {
    e.preventDefault()
    let value = getvalue("searchValue")
    handleSearch(value)

}

document.getElementById("searchValue").addEventListener("keypress", handleInput)
document.getElementById("searching").addEventListener("submit", handleSearchData)

