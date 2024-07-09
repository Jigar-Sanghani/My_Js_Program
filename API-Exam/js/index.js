
let Product_Data = [];

const Mapper = (data) => {
    document.getElementById("Product_List").innerHTML = "";
    data.map((ele) => {


        let image = document.createElement('img');
        image.src = ele.images[0];
        image.classList.add('img-fluid');
        image.addEventListener('click', () => Handle_Product(ele));

        let title = document.createElement("h5");
        title.innerHTML = ele.title;

       

        let category = document.createElement("h6");
        category.innerHTML = `Category: ${ele.category}`;

        let price = document.createElement("h4");
        price.innerHTML = `Cost : ${ele.price}`;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${ele.rating}`;

        let div = document.createElement('div');
        div.classList.add('div');

        div.append(image, title, category, price, rating);

        document.getElementById("Product_List").append(div);
    });
    Product_Data= data;
};


const Handle_Product = (product) => {
    localStorage.setItem("Product_List", JSON.stringify(product));
    window.location.href = "/API-Exam/html/Details.Html";
};

const API = async () => {
    let request = await fetch('https://dummyjson.com/products/');
    let response = await request.json();
    Mapper(response.products);
};
API();

const Handle_Short = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => a.price - b.price);
    Mapper(sortedProducts);
};

const Handle_ReverseShort = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => b.price - a.price);
    Mapper(sortedProducts);
};

const HandleRatingLowToHigh = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => a.rating - b.rating);
    Mapper(sortedProducts);
};

const HandleRatingHighToLow = (e) => {
    e.preventDefault();
    let sortedProducts = [...product].sort((a, b) => b.rating - a.rating);
    Mapper(sortedProducts);
};

const Handle_Search = (e) => {
    e.preventDefault();
    let searchTerm = e.target.value.toLowerCase();
    let filteredProducts = product.filter((product) =>
        product.title.includes(searchTerm) ||
        product.category.includes(searchTerm)
    );
    Mapper(filteredProducts);
};


document.getElementById("pLTH").addEventListener("click", Handle_Short);
document.getElementById("pHTL").addEventListener("click", Handle_ReverseShort);
document.getElementById("rLTH").addEventListener("click", HandleRatingLowToHigh);
document.getElementById("rHTL").addEventListener("click", HandleRatingHighToLow);
document.getElementById("search").addEventListener("keypress", Handle_Search)
