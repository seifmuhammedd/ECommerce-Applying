import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor ( private _FormBuilder:FormBuilder, private _Router:Router ) {}

  logInForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    password: [null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
  }, [{validators: this.comparePassword}])
  comparePassword(){

  }

  submitForm():void{
    if(this.logInForm.valid){
      console.log(this.logInForm)
      localStorage.setItem("userData", JSON.stringify(this.logInForm.value))
        this._Router.navigate(["/user/user-home"])
    }else{
      this.logInForm.markAllAsTouched()
      this.logInForm.setErrors({"mismatch":true})
    }
  }
}
