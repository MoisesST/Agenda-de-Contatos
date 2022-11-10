'use strict';

import { $$id } from '../../helpers/get-element.js';
import { ContactList } from '../../model/contact-list.js';
import { Contact } from '../../model/contact.js';

const contactList = new ContactList();

function createComponent(name, phone) {
  return `
    <div class="contact-container">
      <img
        class="contact-avatar"
        src="../../../assets/resources/img/photo-user-cinza.png"
        alt="avatar"
      />
      <div class="container-with-contact-information">
        <p class="contact-name">${name}</p>
        <p class="contact-number">${phone}</p>
      </div>
    </div>
    `;
}

function insertComponent(element) {
  $$id('id-contact-container').innerHTML += element;
}

$$id('add-btn').addEventListener('click', (event) => {
  const isEmpty = $$id('input-name').value && $$id('input-phone').value;

  const name = $$id('input-name').value;
  const phone = $$id('input-phone').value;

  const dataIsValid = name.length >= 3 && phone.length >= 15;

  if (isEmpty) {
    if (dataIsValid) {
      const contact = new Contact(
        $$id('input-name').value,
        $$id('input-phone').value
      );

      contactList.addContact(contact);

      const component = createComponent(contact.name, contact.phone);

      insertComponent(component);
    }
  }

  if (isEmpty) {
    if (dataIsValid) {
      event.preventDefault();
      $$id('input-name').value = '';
      $$id('input-phone').value = '';
    }
  }
});
