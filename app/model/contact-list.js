'use strict';

export class ContactList {
  constructor() {
    this._contacts = [];
  }

  get contacts() {
    return this._contacts;
  }

  addContact(contact) {
    this._contacts.push(contact);
  }
}
