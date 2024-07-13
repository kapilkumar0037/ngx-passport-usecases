import { Routes } from '@angular/router';
import { DefaultCountryListComponent } from './components/default-country-list/default-country-list.component';
import { DefaultSelectCountryComponent } from './components/default-select-country/default-select-country.component';
import { BlockedCountriesComponent } from './components/blocked-countries/blocked-countries.component';
import { OnlySpecificCountriesComponent } from './components/only-specific-countries/only-specific-countries.component';
import { ConfigPropertiesDemoComponent } from './components/config-properties-demo/config-properties-demo.component';

export const routes: Routes = [
    {path:'', redirectTo:'/default', pathMatch: 'full'},
    { path: "default", component: DefaultCountryListComponent },
    { path: "selected", component: DefaultSelectCountryComponent },
    { path: "without", component: BlockedCountriesComponent },
    { path: "specific", component: OnlySpecificCountriesComponent },
    { path: "config", component: ConfigPropertiesDemoComponent },

];
