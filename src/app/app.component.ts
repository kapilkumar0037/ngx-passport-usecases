import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICountryConfig, IDefaultRegex, PassportInputComponent } from 'ngx-passport-input';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PassportInputComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-passport-usecases';
  countryConfig: ICountryConfig = {
    selectedCountryCode: '',
  }
  regexForUnsupportedCountries: IDefaultRegex = {regex: /^[A-Z0-9]{12}$/, placeholder: 'A1234567B'};

  onCountryChange(country: any) {
    console.log(country);
  }

  passportOutput(passport: any) {
    console.log(passport);
  }
}
