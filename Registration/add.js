let producy_array = JSON.parse(localStorage.getItem('producy_array')) || [];

let handledat = (e) => {
    e.preventDefault();
    let data = {
        title: document.querySelector("#title").value,
        number: document.querySelector("#number").value,
        url: document.querySelector("#url").value,
        category: document.querySelector("#category").value
    }
    producy_array.push(data);
    localStorage.setItem("Products : ", JSON.stringify(producy_array));
    window.localStorage.href = "/Registration/index.html"
};

document.querySelector("#form").addEventListener("submit", handledat);