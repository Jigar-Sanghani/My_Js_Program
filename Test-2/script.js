let question_array = [
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "msg('Hello World');",
        "option2": "alertBox('Hello World');",
        "option3": "alert('Hello World');",
        "option4": "msgBox('Hello World');",
        "answer": "alert('Hello World');"
    },
    {
        "question": "Which of the following is not a reserved word in JavaScript?",
        "option1": "interface",
        "option2": "throws",
        "option3": "program",
        "option4": "short",
        "answer": "program"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "option1": "var colors = (1:'red', 2:'green', 3:'blue')",
        "option2": "var colors = 'red', 'green', 'blue'",
        "option3": "var colors = ['red', 'green', 'blue']",
        "option4": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "answer": "var colors = ['red', 'green', 'blue']"
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "option1": "onchange",
        "option2": "onclick",
        "option3": "onmouseclick",
        "option4": "onmouseover",
        "answer": "onclick"
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "option1": "variable carName;",
        "option2": "var carName;",
        "option3": "v carName;",
        "option4": "string carName;",
        "answer": "var carName;"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "code": "<p id='demo'>This is a demonstration.</p>",
        "option1": "document.getElementById('demo').innerHTML = 'Hello World!';",
        "option2": "document.getElementByName('demo').innerHTML = 'Hello World!';",
        "option3": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
        "option4": "document.getElement('p').innerHTML = 'Hello World!';",
        "answer": "document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "option1": "function myFunction()",
        "option2": "function:myFunction()",
        "option3": "function = myFunction()",
        "option4": "function => myFunction()",
        "answer": "function myFunction()"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "option1": "call myFunction()",
        "option2": "call function myFunction()",
        "option3": "myFunction()",
        "option4": "Call.myFunction()",
        "answer": "myFunction()"
    },
    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "option1": "false",
        "option2": "true",
        "option3": "NaN",
        "option4": "undefined",
        "answer": "true"
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "option1": "*",
        "option2": "x",
        "option3": "=",
        "option4": "-",
        "answer": "="
    },
    {
        "question": "Which method can be used to find the length of a string?",
        "option1": "length()",
        "option2": "getLength()",
        "option3": "strlen()",
        "option4": "length",
        "answer": "length"
    },
    {
        "question": "Which built-in method sorts the elements of an array?",
        "option1": "changeOrder(order)",
        "option2": "order()",
        "option3": "sort()",
        "option4": "arrange()",
        "answer": "sort()"
    },
    {
        "question": "Which of the following is a way to create an object in JavaScript?",
        "option1": "var obj = {};",
        "option2": "var obj = ();",
        "option3": "var obj = [];",
        "option4": "var obj = <>;",
        "answer": "var obj = {};"
    },
    {
        "question": "How do you round the number 7.25 to the nearest integer?",
        "option1": "Math.rnd(7.25)",
        "option2": "Math.round(7.25)",
        "option3": "rnd(7.25)",
        "option4": "round(7.25)",
        "answer": "Math.round(7.25)"
    },
    {
        "question": "How can you detect the client’s browser name?",
        "option1": "navigator.appName",
        "option2": "browser.name",
        "option3": "client.navName",
        "option4": "window.browser",
        "answer": "navigator.appName"
    },
    {
        "question": "Which JavaScript method is used to access an HTML element by id?",
        "option1": "getElementById()",
        "option2": "getElement(id)",
        "option3": "getElementByID()",
        "option4": "getIdElement()",
        "answer": "getElementById()"
    },
]

const UIMaker = () => {
    question_array.map((ele, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${ele.question}`
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

const check = (index, selectoption, btn) => {
    const correct = question_array[index].answer;

    if (selectoption === correct) {
        btn.style.backgroundColor = "green";
        // alert("Correct !!")
    }
    else {
        btn.style.backgroundColor = "red";
        // alert("Wrong !!")
    }
}

const handleproducts = (e) => {
    e.preventDefault();
    
    question_array=[];
    let data = {
        question: document.getElementById("qs").value,
        option1: document.getElementById("op1").value,
        option2: document.getElementById("op2").value,
        option3: document.getElementById("op3").value,
        option4: document.getElementById("op4").value,
        answer: document.getElementById("ans").value,
    }
    question_array.push(data);
    console.log(data);
    UIMaker();
}

UIMaker();

document.getElementById("form").addEventListener("submit", handleproducts)
