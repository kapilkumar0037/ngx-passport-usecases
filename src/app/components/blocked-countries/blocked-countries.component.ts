import { Component } from '@angular/core';
import { ICountryConfig, PassportInputComponent } from 'ngx-passport-input';

@Component({
  selector: 'app-blocked-countries',
  templateUrl: './blocked-countries.component.html',
  styleUrls: ['./blocked-countries.component.scss'],
  standalone: true,
  imports: [PassportInputComponent]
})
export class BlockedCountriesComponent {
  countryConfig: ICountryConfig = {
    blockedCountryCodes : ['al'],
    selectedCountryConfig: {hideCode: true}
  }
  passportOutput(passport: any) {
    console.log(passport);
  }
}
