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

  // If else in angular.
  show:boolean = true;  

  hideShow()
  {
    this.show === true ? this.show = false : this.show = true;
  }

  // else if condition 
  color:string = "red";

  // for loop 
  user_names = ['prince', 'smit', 'kuldeep', 'meet', 'yug'];
  user_details = [
    {
      name: "prince", email: "princechangani@gmail.com", socialAccounts: ['insta', 'facebook', 'Gmail', 'LinkedIn']
    },
    {
      name: "smit", email: "smitborsadiya@gmail.com", socialAccounts: ['facebook', 'insta', 'Gmail']
    }
  ]

  // style binding
  colorh = "orange";
  bgcolor = "brown";
  changeColor()
  {
    this.colorh="brown"
    this.bgcolor="orange"
  }

  // Toggle Element
  display:boolean = true; 
  toggle()
  {
    this.display = !this.display;
  }
}
