import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripsComponent } from './components/trips/trips.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { TriphistComponent } from './components/triphist/triphist.component';
import { SingletripComponent } from './components/singletrip/singletrip.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { EditingtripComponent } from './components/editingtrip/editingtrip.component';

import { MenagerGuard } from './guard/menager.guard';
import { AdminGuard } from './guard/admin.guard';
import { LoggedGuard } from './guard/logged.guard';
import { UnloggedGuard } from './guard/unlogged.guard';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'edit', component: AddtripComponent, canActivate: [MenagerGuard]},
  {path: 'edit/:id', component: EditingtripComponent, canActivate: [MenagerGuard]},
  {path: 'cart', component: CartComponent, canActivate: [LoggedGuard]},
  {path: 'triphist', component: TriphistComponent, canActivate: [LoggedGuard]},
  //{path: 'addtrip', component: AddtripComponent },
  {path: 'trips', component: TripsComponent},
  {path: 'trips/:id', component: SingletripComponent, canActivate: [LoggedGuard]},
  {path: 'admin', component: AdministrationComponent, canActivate: [AdminGuard]},

  {path: 'login', component: LoginComponent, canActivate: [UnloggedGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [UnloggedGuard]},

  { path: '**', redirectTo: 'home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomepageComponent, TripsComponent, CartComponent, TriphistComponent, AddtripComponent,SingletripComponent,LoginComponent,RegisterComponent, AdministrationComponent, EditingtripComponent]
