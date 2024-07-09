let movList = JSON.parse(localStorage.getItem("Product_List")) || {};

document.getElementById("img1").src = movList.images[0]
document.getElementById("title").innerHTML = `Title : ${movList.title}`
document.getElementById("about").innerHTML = `Category : ${movList.category}`
document.getElementById("cost").innerHTML = `Price : ${movList.price}`

const handle = (e) => {
    e.preventDefault();
    let comment = document.getElementById("comment_Input").value 
    document.getElementById("comment").innerHTML = `Comment : ${comment}`
}

document.getElementById("form").addEventListener("submit", handle);