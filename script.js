const signupBtn = document.querySelector('.form__button');
const password = document.querySelector('.form__password');

signupBtn.onclick = function () {
    let passLength = password.value.length;
    if (passLength <= 5) {
        password.style.borderColor = 'red';
        password.style.borderWidth = '2px';
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