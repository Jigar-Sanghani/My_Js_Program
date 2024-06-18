import create from "../components/create.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let data = JSON.parse(localStorage.getItem("book-list")) || [];
let buyList = JSON.parse(localStorage.getItem("buy-list")) || [];
let bookmarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];

const UIMaker = () => {
    document.getElementById("tbody").innerHTML = ""

    data.map((ele, index) => {
        let tr = create("tr")
        let bookName = create("td")
        let authorName = create("td")
        let description = create("td")
        let addedDate = create("td")
        let category = create("td")
        let price = create("td")
        let buy = create("td")
        let Buy = create("button")
        buy.append(Buy)
        Buy.innerHTML = "Buy"
        let bookmark = create("button")
        let mark = create("td")
        mark.append(bookmark)
        bookmark.innerHTML = "Add"

        Buy.setAttribute("class", "green")
        Buy.addEventListener("click", () => handleBuy(index));
        bookmark.addEventListener("click", () => handleBookmark(index));

        bookName.innerHTML = ele.bookName
        authorName.innerHTML = ele.authorName
        description.innerHTML = ele.description
        addedDate.innerHTML = ele.date
        category.innerHTML = ele.category
        price.innerHTML = ele.price

        tr.append(bookName, authorName, description, addedDate, category, price, buy, mark)
        document.getElementById("tbody").append(tr);
    })
}

const handleBuy = (index) => {
    let boughtBook = data.splice(index, 1)[0];
    buyList.push(boughtBook);
    localStorage.setItem("book-list", JSON.stringify(data));
    localStorage.setItem("buy-list", JSON.stringify(buyList));
    UIMaker();
}

const handleBookmark = (index) => {
    let bookmarkedBook = data.splice(index, 1)[0];
    bookmarkList.push(bookmarkedBook);
    localStorage.setItem("book-list", JSON.stringify(data));
    localStorage.setItem("bookmark-list", JSON.stringify(bookmarkList));
    UIMaker();
}

UIMaker()
