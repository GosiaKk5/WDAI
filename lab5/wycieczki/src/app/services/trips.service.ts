import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Trip} from 'src/assets/trip';
import tripsData from '../../assets/trips.json';
import { tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, remove, set, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  trips!: Observable<any[]>;
  private nextId!: number; 
  

  constructor(private db: AngularFireDatabase){
    this.trips = this.db.list('trips').valueChanges();

  }

  getTrips(): Observable<Trip[]>{
    return this.trips
  }

  
  
  addTrip(trip: Trip){
    const db = getDatabase();
    set(ref(db, 'trips/' + trip.id), {
      id: trip.id,
      title: trip.title,
      country: trip.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
      rate: trip.rate,
      price: trip.price,
      peopleLimit: trip.peopleLimit,
      takenSpots: trip.takenSpots,
      description: trip.description,
      image: trip.image,
    });
  }

  deleteTrip(trip: Trip) {
    const db = getDatabase();
    remove(ref(db,'trips/' + trip.id));   
  }

  updateTrip(trip:Trip){
    const db = getDatabase();
    update(ref(db, 'trips/' + trip.id),{
      id: trip.id,
      title: trip.title,
      country: trip.country,
      startDate: trip.startDate,
      endDate: trip.endDate,
      rate: trip.rate,
      price: trip.price,
      peopleLimit: trip.peopleLimit,
      takenSpots: trip.takenSpots,
      description: trip.description,
      image: trip.image,
    })
  }

  getTrip(id: number){
    const db = getDatabase();
     return ref(db,'trips/' + id)
  }




  /*trips!: Observable<Trip[]>;

  trips: Trip[];

  constructor(){
    this.trips = tripsData
  }

  getTrips(): Observable<Trip[]>{
    this.trips = of(tripsData)
    return this.trips
  }

  addTrip(trip: Trip){
    this.trips.pipe(tap(trips => {
      trips.push(trip);
    }));
    console.log("trip added")
    console.log(this.trips)
  }


  getTrips(): Trip[]{
    return this.trips
  }
  addTrip(trip: Trip){
    this.trips.push(trip)
  }*/

}
