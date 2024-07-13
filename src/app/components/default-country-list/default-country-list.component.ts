import { Component } from '@angular/core';
import { PassportInputComponent } from 'ngx-passport-input';

@Component({
  selector: 'app-default-country-list',
  templateUrl: './default-country-list.component.html',
  styleUrls: ['./default-country-list.component.scss'],
  standalone: true,
  imports: [PassportInputComponent]
})
export class DefaultCountryListComponent {
  passportOutput(passport: any) {
    console.log(passport);
  }
}
