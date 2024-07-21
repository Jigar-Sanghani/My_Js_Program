import navbar from "../components/navbar.js";

const API = async () => {
    let request = await fetch('https://json-server-2-e6hf.onrender.com/flight_scheduled');
    let response = await request.json();
    return response;
}

const mapper = async () => {

    let data = await API();

    data.map((ele, index) => {

        let companylogo = document.createElement("img");
        companylogo.src = ele.company_logo;
        companylogo.classList.add("img-fluid", "companylogo");

        let companyname = document.createElement("h1");
        companyname.innerHTML = ele.company_name;
        companyname.classList.add("comanyname");

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
        button.addEventListener("click", () => {
            localStorage.setItem("Book-Flight", JSON.stringify(ele));
            alert("Ticket Book After A Payment ||")
            window.location.href = "/Final-Project/flights/new.html"
        })

        let div = document.createElement("div");
        div.append(companylogo, companyname, number, stime, etime, cost, button);
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