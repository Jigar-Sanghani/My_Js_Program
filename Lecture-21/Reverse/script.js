let hour = 1
let min = 59
let sec = 59

let id = setInterval(() => {
    console.log(`${hour} : ${min} : ${sec}`);
    sec = sec - 1;

    if (sec == 0) {
        min = min - 1;
        sec = 59;
    }
    if (min == 0) {
        hour = hour - 1;
        min = 59;
    }

    if (hour == 0 && min == 0 && sec == 0) {
        clearInterval(id);
    }
}, 1000)

let div = document.createElement('h1')
div.append(id)
  