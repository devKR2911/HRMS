import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(public formbuilder: FormBuilder, private router: Router) {
    this.loginForm = formbuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  ngOnInit() {

  }

  userLogin() {
    this.isFormSubmitted = true;
    if(this.loginForm.valid) {
      console.log("Submitting user form");
    }
  }

  forgotPassword() {
    this.router.navigate(['/forgotpassword']);
  }

}
