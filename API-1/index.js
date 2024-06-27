
const Mapper_Data = (data) => {
    data.map((ele) => {
        let img = document.createElement('img');
        img.src = ele.image;
        img.classList.add('img-fluid');

        let title = document.createElement('h4');
        title.innerHTML = `Title : ${ele.title}`;

        let cost = document.createElement("h3")
        cost.innerHTML = `Price : ${ele.price}`;

        let div = document.createElement("div")
        div.append(img, title, cost)

        document.getElementById("Product_List").append(div)
    })
}

const Data_Handle = async () => {
    let request = await fetch("https://fakestoreapi.com/products")
    let response = await request.json()
    Mapper_Data(response)
}
Data_Handle()
