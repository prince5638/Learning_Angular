import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="custome">
      country-list component with inline template and inline style works!
    </h2>
  `,
  styles: `.custome{color: blue;}`
})
export class CountryListComponent {

}
