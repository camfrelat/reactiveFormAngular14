import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name = new FormControl('');
  mail = new FormControl('');
  pass = new FormControl('');
  add = new FormControl('');

  users: User[];

  constructor() {
    this.users = new Array();
  }
  newUser(): void {
    const createUser = new User(
      this.name.value,
      this.mail.value,
      this.pass.value,
      this.add.value
    );
    this.users.push(createUser);
  }

  ngOnInit(): void {}
}
