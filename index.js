'use strict';

const btnSignIn = document.getElementsByTagName('button')[0];

btnSignIn.addEventListener('click', () => {
  open('/app/pages/login/login.html');
});

const btnCreateAccount = document.getElementsByTagName('button')[1];

btnCreateAccount.addEventListener('click', () => {
  open('/app/pages/create-account/create-account.html');
});

console.log(btnCreateAccount);
