const scriptURL = 'https://script.google.com/macros/s/AKfycbx5NSnMMQ76ETofthVWIs5HfrxPrzNCzCyAdMGzGFEP_TJhcWT-6YHaaLfEGkwWYz9V/exec'

const form = document.forms['btn btn-primary w-100 py-3']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'post', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})