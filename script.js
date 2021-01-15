const signupBtn = document.querySelector('.form__button');
const password = document.querySelector('.form__password');
const showPassword = document.querySelector('.password__button');

signupBtn.onclick = function (event) {
  let passLength = password.value.length;
  if (passLength <= 5) {
      password.style.borderColor = 'red';
      password.style.borderWidth = '2px';
      event.preventDefault();
    } else {
      password.style.borderColor = 'green';
      password.style.borderWidth = '2px';
    }
}

showPassword.onclick = function () {
  if (password.type === 'password') {
      password.type = 'text';
      showPassword.classList.add('hide-password');
    } else {
      password.type = 'password';
      showPassword.classList.remove('hide-password');
    }
}
