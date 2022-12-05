import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './components/trips/trips.component';
import { AddtripComponent } from './components/addtrip/addtrip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FiltrtripsComponent } from './components/filtrtrips/filtrtrips.component';
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AddtripComponent,
    FiltrtripsComponent
    
  ],
  imports: [
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
    MatSliderModule


  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
