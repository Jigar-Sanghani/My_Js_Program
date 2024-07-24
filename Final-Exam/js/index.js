import navbar from "../components/navbar.js";



let islogin = localStorage.getItem("islogin") || false;
if (!islogin) {
    window.location.href = "/Final-Exam/html/signup.html"
}

document.getElementById("navbar").innerHTML = navbar()

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            API({ lat, lon }, false);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

window.addEventListener("load", getLocation);

const API = async () => {
    let request = await fetch('https://json-server-4-tqur.onrender.com/food');
    let response = await request.json();
    Mapper(response)
    return response;
}

API();

const Localdata = JSON.parse(localStorage.getItem('Book-Food')) || [];


const isExists = (id) => {
    let temp = Localdata.filter((item) => item.id == id)
    return temp.length > 0 ? true : false
}



const Mapper =  (data) => {

    document.getElementById("foodlist").innerHTML = ""
    data.map((ele, index) => {
        let image = document.createElement("img")
        image.src = ele.image
        let title = document.createElement("h3")
        title.innerHTML = ele.name
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Order"
        let cost = document.createElement("h4")
        cost.innerHTML = `Price : ${ele.caloriesPerServing}`

        let h5 = document.createElement("h5")
        h5.innerHTML = `City : ${ele.city}`

        let rating = document.createElement("h5")
        rating.innerHTML = `Rating : ${ele.rating}`
        btn2.addEventListener("click", (e) => {

            if (isExists(ele.id)) {

                Localdata.map((item, i) => {
                    if (item.id == ele.id) {
                        Localdata[i].qty += 1
                    }
                })
                alert("This Food Already Exists !!")
            }   
            else {

                Localdata.push({ ...ele, qty: 1 })
                alert("This Food Added To The Cart !!")
                console.log(ele.id);

            }
            e.preventDefault();
            localStorage.setItem("Book-Food", JSON.stringify(Localdata));
            window.location.href = "/Final-Exam/html/cart.html"
        })
        let div = document.createElement("div")
        div.append(image, title, h5, rating, btn2, cost)

        title.classList.add("title")
        image.classList.add("img-fluid");
        div.classList.add("div");
        btn2.classList.add("btn2");
        rating.classList.add("rating");
        h5.classList.add("city");
        cost.classList.add("cost");


        document.getElementById("foodlist").append(div)
    })

}


function sortByName(foodItems) {
    return [...foodItems].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}


function sortByPrice(foodItems) {
    return [...foodItems].sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
}


function sortByPopularity(foodItems) {
    return [...foodItems].sort((a, b) => b.rating - a.rating);
}


document.getElementById('sortByNameBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByName(foodItems);
    Mapper(sortedItems);
    console.log(sortedItems);
});

document.getElementById('sortByPriceBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPrice(foodItems);

    Mapper(sortedItems);
    console.log(sortedItems);
});

document.getElementById('sortByPopularityBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPopularity(foodItems);
    Mapper(sortedItems);
});

const fetchFoodItems = async () => {
    try {
        const response = await fetch('https://json-server-4-tqur.onrender.com/food');
        if (!response.ok) {
            throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        return [];
    }
}


function displayFoodItems(foodItems) {
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';

    foodItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.caloriesPerServing} - Popularity: ${item.rating}`;
        foodList.appendChild(li);
    });
}


document.getElementById("searchValue").addEventListener('input', async (e) => {
    e.preventDefault()
    let input = document.getElementById("searchValue").value
    console.log(input);
    let response = await fetch('https://json-server-4-tqur.onrender.com/food');

    let data = await response.json();
    console.log(data);
    let filter = data.filter(elm => elm.name.includes(input))
    Mapper(filter)
})