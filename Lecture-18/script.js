var count = 0;
    
function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function updateCounter() {
    var counterElement = document.getElementById('counter');
    counterElement.textContent = count;
}