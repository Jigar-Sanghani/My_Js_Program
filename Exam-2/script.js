let products = []

const handleproducts = (e) => {
    e.preventDefault();
    let data = {
        image: document.getElementById("url").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value
    }
    console.log(data.image, data.name, data.price);
    products.push(data);
    uimaker();
};

const uimaker = () => {
    document.getElementById("labber").innerHTML = "";
    products.map((labber, index) => {
        let image_value = document.createElement("img")
        image_value.src = labber.image;
        let name_value = document.createElement("h1")
        name_value.innerHTML = labber.name;
        let price_value = document.createElement("h2")
        price_value.innerHTML = labber.price;
        let buy_value = document.createElement("button")
        buy_value.innerHTML = `BUY NOW`;
        let delet_value = document.createElement("button")
        delet_value.innerHTML = `REMOVE ITEM`;

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "image_value");
        imgdiv.append(image_value);

        let btndiv = document.createElement("div");
        btndiv.append(buy_value, delet_value);
        btndiv.setAttribute("class", "btnDiv");

        let div = document.createElement("div");
        div.append(imgdiv, name_value, price_value, btndiv);
        div.setAttribute("class", "div col-lg-3  col-md-4 col-sm-12");

        document.getElementById("labber").append(div);
        buy_value.addEventListener("click", buy_warning);
        delet_value.addEventListener("click", () => Delete(index));
    });
};

const buy_warning = () => {
    alert("Product is Addedd to your Cart !! ");
};

const Delete_warning = () => {
    alert("Product is Deleted !! ");
};

const Delete = (index) => {
    Data.splice(index, 1);
    Delete_warning();
    uimaker();
};

document.getElementById("form").addEventListener("submit", handleproducts)