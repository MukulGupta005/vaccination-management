// import { BarChartComponent } from './components/barchart/barchart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvaccineComponent } from './components/add-vaccine/add-vaccine.component';
import { EditvaccineComponent } from './components/edit-vaccine/edit-vaccine.component';
import { vaccinesListComponent } from './components/vaccines-list/vaccines-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-vaccine' },
  { path: 'add-vaccine', component: AddvaccineComponent },
  { path: 'edit-vaccine/:id', component: EditvaccineComponent },
  { path: 'vaccines-list', component: vaccinesListComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent }
  // { path: 'barchart', component:BarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }