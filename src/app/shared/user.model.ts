import { FormControl } from '@angular/forms';

export class User {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  address: FormControl;

  constructor(
    username: FormControl,
    email: FormControl,
    password: FormControl,
    address: FormControl
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.address = address;
  }
}
