import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(public formbuilder: FormBuilder, private router: Router) {
    this.userForm = formbuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }


  ngOnInit() {

  }

  sendResetMail() {
    this.isFormSubmitted = true;
    if(this.userForm.valid) {
      console.log("Submitting user form");
    }
  }

  loginUser() {
    this.router.navigate(['/login']);
  }

}