'use strict';

export class Person {
  constructor(name, phone) {
    this._name = name;
    this._phone = phone;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    this._phone = phone;
  }
}
