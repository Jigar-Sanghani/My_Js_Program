
const Mapper = (data) => {
    let weatherIcon = document.getElementById("weatherIcon");
    let cityName = document.getElementById("cityName");
    cityName.innerHTML = `City : ${data.name}`;  
    let temperature = document.getElementById("temperature");
    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°c`;
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = `Humidity : ${data.main.humidity} % `;
    let windSpeed = document.getElementById("windSpeed");
    windSpeed.innerHTML = `WindSpeed : ${data.wind.speed} m/s`;
    let area  = document.getElementById("area");
    area.innerHTML = `Area : ${data.base}`
}   

const API = async (cityName) => {
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ab1498f5c740b7e9ab0993a3b31ef43d&units=matric`)
    let response = await request.json()
    Mapper(response)
    console.log(response);
}


const dataInput = (e) =>{
    e.preventDefault()
    let cityName = document.getElementById("city").value 
    API(cityName)
}

document.getElementById("Search-Icon").addEventListener("click", dataInput)