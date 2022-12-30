import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule,  routingComponents } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RatingModule } from 'ngx-bootstrap/rating';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';


import { TripfilterPipe } from './pipes/tripfilter.pipe';


import { AppComponent } from './app.component';
import { TripsComponent } from './components/trips/trips.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';
import { FiltrtripsComponent } from './components/filtrtrips/filtrtrips.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { TriphistComponent } from './components/triphist/triphist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SingletripComponent } from './components/singletrip/singletrip.component';
import { OpinionformComponent } from './components/opinionform/opinionform.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdministrationComponent } from './components/administration/administration.component';






@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AddtripComponent,
    FiltrtripsComponent,
    TripfilterPipe,
    HomepageComponent,
    CartComponent,
    TriphistComponent,
    NavbarComponent,
    routingComponents,
    SingletripComponent,
    OpinionformComponent,
    RegisterComponent,
    LoginComponent,
    AdministrationComponent
    
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    RatingModule.forRoot(),
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
   


  ],
  providers: [  
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
