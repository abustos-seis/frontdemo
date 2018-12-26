import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { compareValidator } from '../../shared/compare-validator.directive';
import { UserService } from '../../shared/user.service';
import { uniqueEmailValidator } from '../../shared/unique-email-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required, uniqueEmailValidator(this.userService)],
      emailConfirm: ['', [Validators.required, compareValidator('email')], uniqueEmailValidator(this.userService)],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]],
    });
  }

  get email() {
    return this.reactiveForm.get("email");
  }

  get emailConfirm() {
    return this.reactiveForm.get("emailConfirm");
  }

  get password() {
    return this.reactiveForm.get("password");
  }

  get pwConfirm() {
    return this.reactiveForm.get("passwordConfirm");
  }

}
