
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        const videoElement = document.createElement('video');
        videoElement.autoplay = true;
        videoElement.srcObject = stream;

        document.getElementById('video').append(videoElement);
    } catch (error) {
        alert(" Your Camera Is Disable || ");
    }
});

let tabSwitchTime = null;
let awayTimeSeconds = 0;

function calculateAwayTime() {
    if (tabSwitchTime) {
        let currentTime = new Date().getTime();
        let timeDiff = currentTime - tabSwitchTime;
        awayTimeSeconds += Math.round(timeDiff / 1000);
        tabSwitchTime = null;
    }
}



document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        tabSwitchTime = new Date().getTime();
    } else if (document.visibilityState === 'visible' && tabSwitchTime !== null) {
        calculateAwayTime();
        alert(`You were away for ${awayTimeSeconds} seconds.`);
        document.getElementById("away").innerHTML = `You were away for ${awayTimeSeconds} seconds.`;
        awayTimeSeconds = 0;
    }
});

function startAwayTimeCheck() {
    setInterval(function () {
        if (document.visibilityState === 'hidden' && tabSwitchTime !== null) {
            calculateAwayTime();
        }
    }, 1000);
}

startAwayTimeCheck();

const API = async () => {
    let request = await fetch('https://json-server-2-e6hf.onrender.com/qustion');
    let response = await request.json();
    return response;
}

let Correct_Answers = 0

const check = async (index, selectoption, btn) => {
    let data = await API();
    let correct = data[index].answer;

    if (selectoption === correct) {
        btn.style.backgroundColor = "green";
        Correct_Answers++;
    }
    else {
        alert("This Is Wrong Answer || ")
        btn.style.backgroundColor = "red";
    }

    document.getElementById("Correct_Answer").innerHTML = ` Your Marks : ${Correct_Answers}`
}

const UIMaker = async () => {

    let data = await API();

    data.map((ele, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${ele.question}`
        h1.setAttribute("class", "title");
        let bt1 = document.createElement("button");
        bt1.innerHTML = `A. ${ele.option1}`
        let bt2 = document.createElement("button");
        bt2.innerHTML = `B. ${ele.option2}`
        let bt3 = document.createElement("button");
        bt3.innerHTML = `C. ${ele.option3}`
        let bt4 = document.createElement("button");
        bt4.innerHTML = `D. ${ele.option4}`
        bt1.setAttribute("class", "btn")
        bt2.setAttribute("class", "btn")
        bt3.setAttribute("class", "btn")
        bt4.setAttribute("class", "btn")
        bt1.addEventListener("click", () => check(index, ele.option1, bt1))
        bt2.addEventListener("click", () => check(index, ele.option2, bt2))
        bt3.addEventListener("click", () => check(index, ele.option3, bt3))
        bt4.addEventListener("click", () => check(index, ele.option4, bt4))
        document.querySelector("#qustion").append(h1, bt1, bt2, bt3, bt4);
    })
}

UIMaker();

const handleproducts = (e) => {
    e.preventDefault();
    let data = {
        question: document.getElementById("qs").value,
        option1: document.getElementById("op1").value,
        option2: document.getElementById("op2").value,
        option3: document.getElementById("op3").value,
        option4: document.getElementById("op4").value,
        answer: document.getElementById("ans").value,
    }
    UIMaker();
}

document.getElementById("form").addEventListener("submit", handleproducts)

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})