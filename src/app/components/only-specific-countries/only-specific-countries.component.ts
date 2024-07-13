import { Component } from '@angular/core';
import { ICountryConfig, PassportInputComponent } from 'ngx-passport-input';

@Component({
  selector: 'app-only-specific-countries',
  templateUrl: './only-specific-countries.component.html',
  styleUrls: ['./only-specific-countries.component.scss'],
  standalone: true,
  imports: [PassportInputComponent]
})
export class OnlySpecificCountriesComponent {
  countryConfig: ICountryConfig = {
    allowedCountryCodes : ['us', 'in', 'af']
  }
  passportOutput(passport: any) {
    console.log(passport);
  }
}
