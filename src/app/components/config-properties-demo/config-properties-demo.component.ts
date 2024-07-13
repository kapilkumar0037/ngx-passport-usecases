import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICountryConfig, PassportInputComponent } from 'ngx-passport-input';

@Component({
  selector: 'app-config-properties-demo',
  templateUrl: './config-properties-demo.component.html',
  styleUrls: ['./config-properties-demo.component.scss'],
  standalone: true,
  imports: [PassportInputComponent, FormsModule]
})
export class ConfigPropertiesDemoComponent {
  hideFlag = signal(false);
  hideCode = signal(false);
  hideDialCode = signal(false);
  _countryConfig: ICountryConfig = {};

  countryConfig = computed(() => {
    this._countryConfig={ countryListConfig: { hideCode: this.hideCode(), hideDialCode: this.hideDialCode(), hideFlag: this.hideFlag() } };
    return this._countryConfig;
  });
  passportOutput(passport: any) {
    console.log(passport);
  }
}
