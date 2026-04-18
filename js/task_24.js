'use strict';

const registerForm = document.querySelector('.login-form');
const credentials = {};

registerForm.addEventListener('submit', handleSubmit);
  
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  } else {
    credentials.login = login;
    credentials.password = password;
    console.log(credentials);
    form.reset();
  }
}  