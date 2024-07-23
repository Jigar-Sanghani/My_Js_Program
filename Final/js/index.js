import navbar from "../components/navbar.js";



let is_login = localStorage.getItem("is_login") || false;
if (!is_login) {
    window.location.href = "/Final/html/signup.html"
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
    let request = await fetch('https://json-server-1-4hf7.onrender.com/courses');
    let response = await request.json();
    Mapper(response)
    return await response;
}

API()

const Localdata = JSON.parse(localStorage.getItem('course-data')) || [];
let user = JSON.parse(localStorage.getItem("user")) || []


const isExists = (id) => {
    let temp = Localdata.filter((item) => item.id == id)
    return temp.length > 0 ? true : false
}


const Mapper = (data) => {

    document.getElementById("course_List").innerHTML = ""

    data.map((ele, index) => {
        let image = document.createElement("img")
        image.src = ele.image
        image.classList.add("img-fluid", "image");

        let title = document.createElement("h3")
        title.innerHTML = `Name : ${ele.name}`
        title.classList.add("title")

        let category = document.createElement("h4")
        category.innerHTML = `Category : ${ele.category}`
        category.classList.add("category")

        let price = document.createElement("h4")
        price.innerHTML = `Price: ${ele.actual_price_usd}`
        price.classList.add("price")

        let description = document.createElement("h5")
        description.innerHTML = `Description : ${ele.description}`
        description.classList.add("description")

        let btn2 = document.createElement("button")
        btn2.innerHTML = "Book"
        btn2.classList.add("btn2");
        btn2.addEventListener("click", (e) => {

            if (user == "User") {
                if (isExists(ele.id)) {

                    Localdata.map((item, i) => {
                        if (item.id == ele.id) {
                            Localdata[i].qty += 1
                        }
                    })
                    alert("This Product Already Exists !!")
                }
                else {

                    Localdata.push({ ...ele, qty: 1 })
                    alert("This Product Added To The Cart !!")

                }


                e.preventDefault();
                localStorage.setItem("course-data", JSON.stringify(Localdata));
                window.location.href = "/Final/html/dashbord.html"
            }
            else {

                Localdata.push({ ...ele, qty: 1 })
                alert("This Product Added To The Cart !!")
            }
        })

        let div = document.createElement("div")
        div.classList.add("div");
        div.append(image, title, category, price, description, btn2)

        document.getElementById("course_List").append(div)
    })

}

// Mapper();

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
    return [...foodItems].sort((a, b) => a.actual_price_usd - b.actual_price_usd);
}


function sortByPopularity(foodItems) {
    return [...foodItems].sort((a, b) => b.actual_price_usd - a.actual_price_usd);

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
        const response = await fetch('https://json-server-2-e6hf.onrender.com/courses');
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
    let response = await fetch('https://json-server-2-e6hf.onrender.com/courses');

    let data = await response.json();
    console.log(data);
    let filter = data.filter(elm => elm.name.includes(input))
    Mapper(filter)
})