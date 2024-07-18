
const scriptURL = 'https://script.google.com/macros/s/AKfycbw337r75pZZ4gMXAm8hgrsx514txf2dj3wjPZBNYg8bT0nKUEdO9DsRElsjF2bHoEpy/exec';

const form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thanks for contacting us! We will contact you soon.");
        })
        .catch(error => console.error('Error!', error.message));
    window.location.href = 'https://docs.google.com/spreadsheets/d/1FldHIBZDU-qMcZsWJ2nnD7pFwIm5SftEdgiz0noycnY/edit?gid=0#gid=0';
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Right Click Is Disabled ||");
})