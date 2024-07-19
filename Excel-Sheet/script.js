const scriptURL = 'https://script.google.com/macros/s/AKfycbwX5OUa2AJxz8uMu4RRKad83tH65akM_9wnpEk3hyyj3dsMeK92VkneHkha79El6klivg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Right Click Is Disabled ||");
})