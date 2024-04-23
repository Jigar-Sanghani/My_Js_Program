const get = () => {
    let num = document.getElementById("num").value
    if(num%2==0){
        document.getElementById("ready").innerHTML = `it's an even number`
    }
    else{
        document.getElementById("ready").innerHTML = `it's an odd number`
    }
    document.getElementById("ready").innerHTML = `Total :  ${title}`
}