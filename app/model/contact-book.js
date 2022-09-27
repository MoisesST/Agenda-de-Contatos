export class ContactBook {
  _contacts;

  constructor() {
    this._contacts = [];
  }

  getContacts() {
    return this._contacts;
  }

  getLength() {
    return this._contacts.length;
  }
  addContact(contact) {
    this._contacts.push(contact);
  }

  editContact() {}

  removeContact() {}
}
