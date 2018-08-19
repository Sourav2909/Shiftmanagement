import { Component, OnInit } from '@angular/core';
import { User } from '../Shared/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : User ;
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });


  constructor() { }
  get firstname(){
    return this.form.get('firstName')
  }

  ngOnInit() {
    }
    onSubmit(){
      alert(JSON.stringify(this.form.value));
    }
}
