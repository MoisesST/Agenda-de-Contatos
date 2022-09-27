import { Person } from "./person.js";

export class User extends Person {
  _email;
  _password;

  constructor(name, email, password) {
    super(name);
    this._email = email;
    this._password = password;
  }

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }

  getPassword() {
    return this._password;
  }

  setPassword(password) {
    this._password = password;
  }
}
