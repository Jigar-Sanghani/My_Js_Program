let products = []

const handleproducts = (e) => {
    e.preventDefault();
    let data = {
        image : document.getElementById("url").value,
        name : document.getElementById("name").value,
        price : document.getElementById("price").value
    }
    console.log(data.image,data.name,data.price);
    // products.push(data);

    let image_value = document.createElement("img")
    image_value.src = data.image;
    let name_value = document.createElement("h1")
    name_value.innerHTML = data.name;
    let price_value = document.createElement("h2")
    price_value.innerHTML = data.price;
    let column = document.createElement('div')
    column.append(image_value,name_value,price_value)

    document.getElementById("labber").append(column)
}

document.getElementById("form").addEventListener("submit",handleproducts)