let bank_details = [];


class bankaccount {
    constructor(name, mo_number, ac_number, address) {
        this.name = name;
        this.mo_numbar = mo_number;
        this.ac_number = ac_number;
        this.address = address;
        this.amount = 0;
    }

    deposit(amount) {
        this.amount += Number(amount);
    }

    withdraw(amount) {
        this.amount -= Number(amount);
    }
}

let uimaker = () => {
    bank_details.map((ele) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `Name : ${ele.name}`;
        let h2 = document.createElement("h2");
        h2.innerHTML = `Mobile-Number : ${ele.mo_numbar}`;
        let h3 = document.createElement("h2");
        h3.innerHTML = `Account-Number : ${ele.ac_number}`;
        let h4 = document.createElement("h2");
        h4.innerHTML = `Address : ${ele.address}`;
        let h5 = document.createElement("h2");
        h5.innerHTML = `Amount : ${0}`
        h5.setAttribute("id", "printamount");
        document.querySelector("#print").append(h1, h2, h3, h4,h5);
    })
    bank_details = [];
}


let mybank_account = (e) => {
    e.preventDefault();

    let data = {
        name: document.querySelector("#name").value,
        mo_numbar: document.querySelector("#mo_number").value,
        ac_number: document.querySelector("#ac_number").value,
        address: document.querySelector("#address").value
    }
    bank_details.push(data);
    uimaker();
}


let my_deposit = (e) => {
    e.preventDefault();
    let amount= document.querySelector("#depo_amount").value;
    document.querySelector("printamount").innerHTML = amount;
    bank_details.push(amount);
    uimaker();
}

document.querySelector("#form").addEventListener("submit", mybank_account)
document.querySelector("#button").addEventListener("click", my_deposit)

