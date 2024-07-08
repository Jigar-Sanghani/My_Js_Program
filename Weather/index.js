


const mapper = (data) => {
    console.log(data.name);
}

const getData = async (city) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&appid{ab1498f5c740b7e9ab0993a3b31ef43d}}`)
    console.log(res);
    mapper(res)

}




const Data_handle = (e) => {
    e.preventDefault();

    let city = document.getElementById('city').value;

    getData(city)
}


document.getElementById("form").addEventListener("submit", Data_handle)
