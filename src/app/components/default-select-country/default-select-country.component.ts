import { Component } from '@angular/core';
import { ICountryConfig, PassportInputComponent } from 'ngx-passport-input';

@Component({
  selector: 'app-default-select-country',
  templateUrl: './default-select-country.component.html',
  styleUrls: ['./default-select-country.component.scss'],
  standalone: true,
  imports: [PassportInputComponent]
})
export class DefaultSelectCountryComponent {
  countryConfig: ICountryConfig = {
    selectedCountryCode: 'in',
  }
  passportOutput(passport: any) {
    console.log(passport);
  }
}
