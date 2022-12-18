import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripsComponent } from './components/trips/trips.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { TriphistComponent } from './components/triphist/triphist.component';
import { SingletripComponent } from './components/singletrip/singletrip.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'trips', component: TripsComponent },
  {path: 'cart', component: CartComponent},
  {path: 'triphist', component: TriphistComponent},
  {path: 'addtrip', component: AddtripComponent },
  {path: 'trips/:id', component: SingletripComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomepageComponent, TripsComponent, CartComponent, TriphistComponent, AddtripComponent,SingletripComponent ]
