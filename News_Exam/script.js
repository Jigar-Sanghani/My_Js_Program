<<<<<<< HEAD
let details = JSON.parse(localStorage.getItem(`sign_array`)) || {};

const userdetails = () => {
    let image = document.createElement('img');
    image.src = details.image;
    image.classList.add('user-image');
    document.querySelector('#user-image').append(image);
    document.querySelector('#user-name').innerHTML = details.name;
    document.querySelector('#user-email').innerHTML = details.email;
    document.querySelector('#user-contry').innerHTML = details.select;
}

=======
let details = JSON.parse(localStorage.getItem(`sign_array`)) || {};

const userdetails = () => {
    let image = document.createElement('img');
    image.src = details.image;
    image.classList.add('user-image');
    document.querySelector('#user-image').append(image);
    document.querySelector('#user-name').innerHTML = details.name;
    document.querySelector('#user-email').innerHTML = details.email;
    document.querySelector('#user-contry').innerHTML = details.select;
}

>>>>>>> 1b0a616dc40affdce3280f601b42a0740f904bcf
userdetails();