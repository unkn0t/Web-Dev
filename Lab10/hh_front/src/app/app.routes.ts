import { Routes } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent },
  { path: '', redirectTo: 'companies', pathMatch: "full" }
];
