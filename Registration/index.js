let producy_array = JSON.parse(localStorage.getItem('producy_array')) || [];

const deleteproduct = (id) => {
    producy_array.splice(id, 1);
    uimaker(producy_array);
}

const buyproduct = (id) => {
    alert('You have buy product')
}

const uimaker = (data) => {
    document.getElementById("tbody").innerHTML = "";
    data.map((ele, index) => {
        let title = document.createElement(`h1`)
        title.innerHTML = ele.title
        let number = document.createElement(`p`)
        number.innerHTML = ele.number
        let img = document.createElement(`img`)
        img.src = ele.img
        let category = document.createElement(`span`)
        category.innerHTML = ele.category
        let btn1 = document.createElement(`button`)
        btn1.innerHTML = `Delete`
        btn1.addEventListener("click", () => deleteproduct(index))
        let btn2 = document.createElement(`button`)
        btn2.innerHTML = `Buy Now`
        btn2.addEventListener("click", () => buyproduct(index))
        let div = document.createElement(`div`)
        div.append(title, number, img, category, btn1, btn2)
        document.querySelector("#div").append(div)
    })
}

uimaker(producy_array);