const get = () => {
    let age = document.getElementById("age").value
    let name = document.getElementById("name").value

    document.getElementById("ready").innerHTML = `Name :  ${name}`
    document.getElementById("start").innerHTML = `Age :  ${age}`
}

