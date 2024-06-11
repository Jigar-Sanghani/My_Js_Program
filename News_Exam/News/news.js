
let news_array = [];

const newsdata = (e) => {
    e.preventDefault();
    let data = {
        title: document.querySelector("#title").value,
        discription: document.querySelector("#discription").value,
        image: document.querySelector("#image").value,
        select: document.querySelector("#select").value
    }
    news_array.push(data);
    uimaker()
}

const uimaker = () => {
    document.getElementById("").innerHTML = "";

    data.map(()=>{
        let title = document.createElement(`h1`)
        title.innerHTML = ele.title
        let discription = document.createElement(`h2`)
        discription.innerHTML = ele.discription
        let img = document.createElement(`img`)
        img.src = ele.img
    })
}
document.querySelector("#form").addEventListener("submit", newsdata);