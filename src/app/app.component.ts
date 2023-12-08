import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  name = "Prince Changani";
  user_name = "";
  getName(firstName:string, lastName:string)
  {
    alert("full name is: "+ firstName + " " + lastName);
  };
  getValue(value:string)
  {
    console.warn(value);
  };
  getUser(value:string)
  {
    console.log("The user name is: " + value);
    this.user_name = value;
  };
  count:number = 0;
  counter(sign:string)
  {
    // using if else.
    // if(sign==="add")
    // {
    //   this.count++;
    // }
    // else{
    //   this.count--;
    // }

    // Using ternary operator.
    sign === 'add' ? this.count++ : this.count--;
  };

  // Property binding.
  disable:boolean = false;

  inputDisable()
  {
    this.disable===true ? this.disable = false : this.disable = true;
  }
}
