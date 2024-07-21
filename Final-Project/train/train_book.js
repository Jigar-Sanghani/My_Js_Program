import navbar from "../components/navbar.js";

const API = async () => {
    let request = await fetch('https://json-server-2-e6hf.onrender.com/train_scheduled');
    let response = await request.json();
    return response;
}

let Train_Menu = JSON.parse(localStorage.getItem("Train-Menu")) || []

const handlebooking = async (index, ele) => {
    const seat = Train_Menu.seat;
    const cost = ele.cost;
    const total = cost * seat;

    alert(`----- You Have Booked Bus Tickets With -----
        Bus Type :  ${ele.company_name}
        Bus Number :  ${ele.number} 
        From : ${Train_Menu.from}
        To : ${Train_Menu.to}
        Date : ${Train_Menu.departure}
        Seat : ${Train_Menu.seat}
        ${Train_Menu.from} :  ${ele.s_time} 
        ${Train_Menu.to} : ${ele.e_time}
        Cost : ${ele.cost}
        Total Cost : ${total}`);
}

const mapper =async() => {

    let data = await API();

    data.map((ele,index) => {

        let companylogo = document.createElement("img");
        companylogo.src = ele.company_logo;
        companylogo.classList.add("img-fluid", "companylogo");

        let companyname = document.createElement("h1");
        companyname.innerHTML = ele.company_name;
        companyname.classList.add("companyname");

        let number = document.createElement("p");
        number.innerHTML = `Number : ${ele.number}`;
        number.classList.add("number");

        let stime = document.createElement("p");
        stime.innerHTML = `Start : ${ele.s_time}`;
        stime.classList.add("stime");

        let etime = document.createElement("p");
        etime.innerHTML = `End : ${ele.e_time}`;
        etime.classList.add("etime");

        let cost = document.createElement("h3");
        cost.innerHTML = ele.cost;
        cost.classList.add("cost");

        let button = document.createElement("button");
        button.innerHTML = "Book";
        button.classList.add("btn1");
        button.addEventListener("click", () => handlebooking(index, ele))

        let div = document.createElement("div");
        div.append(companyname,number,stime,etime,cost,button);
        div.classList.add("div");

        document.getElementById("scheduled").append(div);
    })
};

mapper();

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})


document.getElementById("navbar").innerHTML = navbar();