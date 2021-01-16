const signupBtn = document.querySelector('.form__button');
const password = document.querySelector('.form__password');
const showPassword = document.querySelector('.password__button');
const passWarning = document.querySelector('.password-warning');

signupBtn.onclick = function (event) {
  let passLength = password.value.length;
  if (passLength <= 5) {
      password.style.borderColor = 'red';
      password.style.borderWidth = '2px';
      passWarning.style.display = 'block';
      event.preventDefault();
    } else {
      password.style.borderColor = 'green';
      password.style.borderWidth = '2px';
      passWarning.style.display = 'none';
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



/*
showPassword.onchange = function () {
    if (showPassword.checked) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  };
  
  password.oninput = function () {
    let passLength = password.value.length;
    securityBar.style.width = passLength * 10 + '%';
    if (passLength <= 5) {
      securityBar.style.backgroundColor = 'red';
    } else if (passLength > 5 && passLength < 10) {
      securityBar.style.backgroundColor = 'gold';
    } // Добавьте else сюда
  
  };
*/