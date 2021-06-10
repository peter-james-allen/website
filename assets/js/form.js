const scriptURL = "https://script.google.com/macros/s/AKfycbzQTvCSkH7nY55HSTMhE9rGOB0NJKhLfGbagOcO24oEMdGU9NG4jZ5ohSfqay3gV8zsjQ/exec"
const form = document.getElementById("submitRSVP");

form.addEventListener('submit', e => {

  var object = {};
  new FormData(form).forEach(function(value, key){
    object[key] = value;
  });

  var guests = (Object.keys(object).length - 2) / 4;
  
  for (var i=0; i<guests; i++) {
    var form_data = new FormData();
    form_data.append("name", object[`name-${i+1}`]);
    form_data.append("rsvp", object[`rsvp-${i+1}`]);
    form_data.append("boat", object[`boat-${i+1}`]);
    form_data.append("meal", object[`meal-${i+1}`]);
    form_data.append("message", object[`message`]);

    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: form_data,
    mode: "no-cors"})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    }
})