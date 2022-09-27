export class Contact {
  _name;
  _phone;

  constructor(nome, phone) {
    this._name = nome;
    this._phone = phone;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getPhone() {
    return this._phone;
  }

  setPhone(phone) {
    this._phone = phone;
  }
}
