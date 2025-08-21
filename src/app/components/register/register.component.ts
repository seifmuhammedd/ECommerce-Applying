import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor ( private _AuthService:AuthService, private _Router:Router ) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [ Validators.required,Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl(null, [ Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    phone: new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{6}$/)]),
  }, this.comparePassword)

  // 1- capture password value
  // 2- capture confirm password value 
  // 3- compare values of them 
  // 4- if true -> return null
  // 5- if false -> {missMatch: true}

  comparePassword(form: AbstractControl): (null|object){
    if (form.get("password")?.value === form.get("confirmPassword")?.value){
      return null
    }else{
      return {'mismatch': true}
    }
  }
  resText !: string

  submitForm():void{
    if(this.registerForm.valid){
      console.log(this.registerForm)
      setTimeout(() => {
        this._Router.navigate(["/auth/login"])
      }, 2000);
      
    }else{
      this.registerForm.markAllAsTouched()
      this.registerForm.setErrors({"mismatch":true})
    }
  }


}
