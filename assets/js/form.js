const scriptURL = "https://script.google.com/macros/s/AKfycbzQTvCSkH7nY55HSTMhE9rGOB0NJKhLfGbagOcO24oEMdGU9NG4jZ5ohSfqay3gV8zsjQ/exec"
const form = document.getElementById("submitRSVP");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form),
  mode: "no-cors"}, headers: {"content-type": "multipart/form-data"})
  .then(response => console.log('Success!' + body, response))
  .catch(error => console.error('Error!', error.message))
})