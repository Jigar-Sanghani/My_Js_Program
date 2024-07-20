import navbar from "../components/navbar.js";

let data_1 = [
    {
        id: "1",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Volvo",
        number : "6E8761",
        s_time: "06:00",
        e_time: "10:00",
        cost: "₹ 450"

    },
    {
        id: "2",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Volvo-Sleeper",
        number : "06B745",
        s_time: "09:00",
        e_time: "13:00",
        cost: "₹ 750"

    },
    {
        id: "3",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Ac",
        number : "12K960",
        s_time: "12:00",
        e_time: "16:00",
        cost: "₹ 435"
    },
   {
        id: "4",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Ac-Sleeper",
        number : "07K647",
        s_time: "15:00",
        e_time: "19:00",
        cost: "₹ 250"

    },
    {
        id: "5",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Express",
        number : "94657P",
        s_time: "18:00",
        e_time: "22:00",
        cost: "₹ 550"

    },
    {
        id: "6",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Sleeper",
        number : "127H51",
        s_time: "21:00",
        e_time: "25:00",
        cost: "₹ 350"

    },
    {
        id: "7",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Emirates",
        number : "6E8761",
        s_time: "00:00",
        e_time: "04:00",
        cost: "₹ 450"

    },
    {
        id: "8",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPPNada_8XIbmBarO_1FnTgNfteouiz6c9g&s",
        company_name: "Gurjarnagri",
        number : "45X785",
        s_time: "03:00",
        e_time: "07:008",
        cost: "₹ 500"

    },
]

const mapper = (data) => {
    data.map((ele) => {

        let companylogo = document.createElement("img");
        companylogo.src = ele.company_logo;
        companylogo.classList.add("img-fluid", "companylogo");

        let companyname = document.createElement("h1");
        companyname.innerHTML = `Type : ${ele.company_name}`;
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
        button.addEventListener("click",()=>{
            window.location.href = ""
        })

        let div = document.createElement("div");
        div.append(companyname,number,stime,etime,cost,button);
        div.classList.add("div");

        document.getElementById("scheduled").append(div);
    })
};

mapper(data_1);

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})

console.log(data_1);

document.getElementById("navbar").innerHTML = navbar();