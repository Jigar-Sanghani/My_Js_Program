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
            API({lat, lon}, false);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

window.addEventListener("load", getLocation);

const API = async () => {
    let request = await fetch('https://json-server-4-tqur.onrender.com/food');
    let response = await request.json();
    return response;
}

const API1 = async (search) => {
    let request = await fetch(`https://json-server-4-tqur.onrender.com/food?name=${search}`);
    let response = await request.json();
    return response;
}


const Mapper = async () => {

    let data = await API();

    document.getElementById("foodlist").innerHTML = ""
    data.map((ele, index) => {
        let image = document.createElement("img")
        image.src = ele.image
        let title = document.createElement("h3")
        title.innerHTML = ele.name
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Order"
        let cost = document.createElement("h4")
        cost.innerHTML = `Cost : ${ele.caloriesPerServing}`

        let h5 = document.createElement("h5")
        h5.innerHTML =  `City : ${ele.city}`

        let rating = document.createElement("h5")
        rating.innerHTML = `Rating : ${ele.rating}`
        btn2.addEventListener("click", () => {
            localStorage.setItem("Book-Food", JSON.stringify(ele));
            alert("Food Order After A Payment ||")
            window.location.href = "/Final-Exam/html/cart.html"
        })                                                                                                                  
        let div = document.createElement("div")
        div.append( image,title,h5,rating,  btn2, cost)

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

const mapper = async (data) => {


    document.getElementById("foodlist").innerHTML = ""
    data.map((ele, index) => {
        let image = document.createElement("img")
        image.src = ele.image
        let title = document.createElement("h3")
        title.innerHTML = ele.name
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Order"
        let cost = document.createElement("h4")
        cost.innerHTML = `Cost : ${ele.caloriesPerServing}`

        let h5 = document.createElement("h5")
        h5.innerHTML =  `City : ${ele.city}`

        let rating = document.createElement("h5")
        rating.innerHTML = `Rating : ${ele.rating}`
        btn2.addEventListener("click", () => {
            localStorage.setItem("Book-Food", JSON.stringify(ele));
            alert("Food Order After A Payment ||")
            window.location.href = "/Final-Exam/html/cart.html"
        })                                                                                                                  
        let div = document.createElement("div")
        div.append( image,title,h5,rating,  btn2, cost)

        image.classList.add("img-fluid");
        div.classList.add("div");
        btn2.classList.add("btn2");
        rating.classList.add("rating");
        h5.classList.add("city");
        cost.classList.add("cost");

        
        document.getElementById("foodlist").append(div)
    })
    
}

Mapper();
// mapper();

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
    mapper(sortedItems);
    console.log(sortedItems);
});

document.getElementById('sortByPriceBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPrice(foodItems);
    
    mapper(sortedItems);
    console.log(sortedItems);
});

document.getElementById('sortByPopularityBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPopularity(foodItems);
    mapper(sortedItems);
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


const Handle_Mapper = async (search) => {
    try {
        let data = await API1(search); // Assuming API function accepts a search parameter
        mapper(data);
    } catch (error) {
        alert('Error fetching data:', error);
    }
}

const Search_Handle = async (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent default form submission behavior

        let Result_Search = document.getElementById("Video_Search").value;

        await Handle_Mapper(Result_Search);
        console.log(Result_Search);
    }
}

document.getElementById("Video_Search").addEventListener("keydown", Search_Handle);
