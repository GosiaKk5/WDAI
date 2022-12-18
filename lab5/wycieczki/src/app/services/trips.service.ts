import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Trip} from 'src/assets/trip';
import tripsData from '../../assets/trips.json';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  //trips!: Observable<Trip[]>;

  trips: Trip[];

  constructor(){
    this.trips = tripsData
  }

  /*getTrips(): Observable<Trip[]>{
    this.trips = of(tripsData)
    return this.trips
  }

  addTrip(trip: Trip){
    this.trips.pipe(tap(trips => {
      trips.push(trip);
    }));
    console.log("trip added")
    console.log(this.trips)
  }*/


  getTrips(): Trip[]{
    return this.trips
  }
  addTrip(trip: Trip){
    this.trips.push(trip)
  }

}
