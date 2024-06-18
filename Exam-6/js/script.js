import getValue from "../components/getValue.js";
import Navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = Navbar()

let Array = []

const handleStudent = (e) =>{
    e.preventDefault();
    let student = {
        bookName: getValue("bookName"),
        authorName: getValue("authorName"),
        description: getValue("discription"),
        date: getValue("date"),
        category: getValue("category"),
        price: getValue("price"),
    }
    console.log(student)
    Array.push(student)
    localStorage.setItem('book-list',JSON.stringify(Array))
}
document.getElementById("form").addEventListener("submit",handleStudent)