import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData:any = {};
  getData(data:NgForm)
  {
    console.warn(data)
    this.userData = data;
  }
}
