'use strict';

import { $$id } from '../../helpers/get-element.js';
import { User } from '../../model/user.js';

const form = document.forms[0];

const nameInput = form.elements[0];
const emailInput = form.elements[1];
const passwordInput = form.elements[2];

const button = form.btn;

button.addEventListener('click', (event) => {
  const isEmpty = nameInput.value && emailInput.value && passwordInput.value;

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  const dataIsValid = name.length >= 3
        && email.length >= 20 && password.length >= 8;

  if (isEmpty) {
    const user = new User(
      $$id('name').value,
      $$id('email').value,
      $$id('password').value
    );
    console.log(user);
  }

  if (isEmpty) {
    if (dataIsValid) {
      event.preventDefault();
      open('../contacts/contacts.html');
    }
  }
});
