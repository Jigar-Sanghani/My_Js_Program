
const Mapper = (data) => {
    let weatherIcon = document.getElementById("weatherIcon");
    let cityName = document.getElementById("cityName");
    cityName.innerHTML = `City : ${data.name}`;  
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = `${Math.round(data.main.temp )}°c`;
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `Humidity : ${data.main.humidity} % `;
    let windSpeed = document.getElementById("windSpeed");
    windSpeed.innerHTML = `WindSpeed : ${data.wind.speed} m/s`;
    let area  = document.getElementById("area");
    area.innerHTML = `Area : ${data.base}`
}   

const API = async (query, isCity = true) => {
    let url = isCity
    ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=ab1498f5c740b7e9ab0993a3b31ef43d&units=metric`
    : `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=ab1498f5c740b7e9ab0993a3b31ef43d&units=metric`;
    let request = await fetch(url);
    let response = await request.json()
    Mapper(response)
    console.log(response);
}


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

const dataInput = (e) =>{
    e.preventDefault()
    let cityName = document.getElementById("city").value 
    API(cityName)
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

document.getElementById("Search-Icon").addEventListener("click", dataInput)
window.addEventListener("load", getLocation);
