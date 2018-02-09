import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup,  Validator, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _router: Router ) {

  }

  ngOnInit() {

      this.loginForm = this.fb.group({
        'userName' : ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
      })
  }

  login() {
    const {value, valid  }  = this.loginForm
    if (valid && value.userName === 'admin@gmail.com' && value.password === 'admin@123') {
      localStorage.setItem('userInfo', JSON.stringify({'isLogin' : true, 'userName': 'Robin Gupta'}));
      this._router.navigate(['./home']);
    }
  }

}
