import navbar from "../components/navbar.js";

let data_1 = [
    {
        id: "1",
        company_logo: "https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.jpg",
        company_name: "Indigo",
        s_time: "06:00",
        e_time: "10:00",
        cost: "₹ 4,500"

    },
    {
        id: "2",
        company_logo: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/08/11/Incoming/Pictures/1250711_Wallpaper2.jpg",
        company_name: "Vistara",
        s_time: "09:00",
        e_time: "13:00",
        cost: "₹ 7,500"

    },
    {
        id: "3",
        company_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Gq_woK4rbx6iyGpcNLtyaO4ks5dmUjDpw&s",
        company_name: "Aksara Air",
        s_time: "12:00",
        e_time: "16:00",
        cost: "₹ 10,500"
    },
   {
        id: "4",
        company_logo: "https://uxdt.nic.in/wp-content/uploads/2020/06/Preview-2.png?x38773",
        company_name: "Air India",
        s_time: "15:00",
        e_time: "19:00",
        cost: "₹ 2,500"

    },
    {
        id: "5",
        company_logo: "https://1000logos.net/wp-content/uploads/2021/07/IndiGo-Logo.jpg",
        company_name: "Indigo",
        s_time: "18:00",
        e_time: "22:00",
        cost: "₹ 5,500"

    },
    {
        id: "6",
        company_logo: "https://uxdt.nic.in/wp-content/uploads/2020/06/Preview-2.png?x38773",
        company_name: "Air India",
        s_time: "21:00",
        e_time: "25:00",
        cost: "₹ 3,500"

    },
    {
        id: "7",
        company_logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg",
        company_name: "Emirates",
        s_time: "00:00",
        e_time: "04:00",
        cost: "₹ 6,500"

    },
    {
        id: "8",
        company_logo: "https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-2006-present.jpg",
        company_name: "Qutar",
        s_time: "03:00",
        e_time: "07:008",
        cost: "₹ 9,500"

    },
]

const mapper = (data) => {
    data.map((ele) => {

        let companylogo = document.createElement("img");
        companylogo.src = ele.company_logo;
        companylogo.classList.add("img-fluid", "image");

        let companyname = document.createElement("h1");
        companyname.innerHTML = ele.company_name;
        companyname.classList.add("h1");

        let stime = document.createElement("p");
        stime.innerHTML = `Start : ${ele.s_time}`;
        stime.classList.add("stime");

        let etime = document.createElement("p");
        etime.innerHTML = `End : ${ele.e_time}`;
        etime.classList.add("etime");

        let cost = document.createElement("h3");
        cost.innerHTML = ele.cost;
        cost.classList.add("h3");

        let button = document.createElement("button");
        button.innerHTML = "Book";
        button.classList.add("btn1");
        button.addEventListener("click",()=>{
            window.location.href = ""
        })

        let div = document.createElement("div");
        div.append(companylogo,companyname,stime,etime,cost,button);
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