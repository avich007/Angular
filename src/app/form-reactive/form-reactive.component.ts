import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent{

  form = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(5)]),
    password: new FormControl('', [Validators.required,Validators.minLength(7)])
  })

  get Username(){
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

  constructor() { }

}
