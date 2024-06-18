import create from "../components/create.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();

let bookmarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];
const UIMaker = () => {
    document.getElementById("tbody").innerHTML = "";

    bookmarkList.map((ele) => {
        let tr = create("tr");
        let bookName = create("td");
        let authorName = create("td");
        let description = create("td");
        let addedDate = create("td");
        let category = create("td");
        let price = create("td");

        bookName.innerHTML = ele.bookName;
        authorName.innerHTML = ele.authorName;
        description.innerHTML = ele.description;
        addedDate.innerHTML = ele.date;
        category.innerHTML = ele.category;
        price.innerHTML = ele.price;

        tr.append(bookName, authorName, description, addedDate, category, price);
        document.getElementById("tbody").append(tr);
    });
};
UIMaker();