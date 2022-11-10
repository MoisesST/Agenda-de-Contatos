'use strict';

import { Person } from './person.js';

export class Contact extends Person {
  constructor(name, phone) {
    super(name, phone);
  }
}
