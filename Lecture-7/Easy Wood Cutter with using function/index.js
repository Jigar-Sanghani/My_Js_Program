const get = () => {
    let num = document.getElementById("num").value
    if(num%3==0){
        document.getElementById("ready").innerHTML = `Yes`
    }
    else{
        document.getElementById("ready").innerHTML = `No`
    }
    document.getElementById("ready").innerHTML = `Total :  ${title}`
}