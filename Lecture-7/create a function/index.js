const subtract = (num1,num2,num3) =>{
    return num1+num2+num3;
}

const get = () => {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value

    let title = subtract(Number(num1),Number(num2),Number(num3));
    document.getElementById("ready").innerHTML = `Total :  ${title}`
}

