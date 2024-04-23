const get = () => {
    let num = document.getElementById("num").value
    document.getElementById("ready").innerHTML = `Square :  ${num*num}`
}