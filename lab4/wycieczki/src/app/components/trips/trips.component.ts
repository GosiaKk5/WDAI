import { Component, OnInit } from '@angular/core';
import tripsData from '../../../assets/trips.json';
import {Trip} from 'src/assets/trip'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit{
 
  trips: Trip[] = tripsData;
  takenCounter: number = 0;
  showAddTrip = false;

  rate=0;
  max=5;
  isReadonly = false;

  ngOnInit(): void {
  }

  add(trip: Trip){
    if (trip.takenSpots < trip.peopleLimit){
      trip.takenSpots += 1;
      this.takenCounter ++;
    } 
  }

  remove(trip: Trip){
    if(trip.takenSpots > 0){
      trip.takenSpots -= 1;
      this.takenCounter--;
    }   

  }

  getTakenCounter(): number{
    return this.takenCounter
  }

  findTheCheapest() : Trip{
    let minTrip = this.trips[0];

    for(let trip of this.trips){
      if(minTrip.price > trip.price){
        minTrip = trip;
      }
    }

    return minTrip;
  }

  findTheMostExpensive() : Trip{
    let maxTrip = this.trips[0];

    for(let trip of this.trips){
      if(maxTrip.price < trip.price){
        maxTrip = trip;
      }
    }

    return maxTrip;
  }

  removeTrip(trip : Trip){
    for (let i = 0; i < this.trips.length; ++i) {
      if (this.trips[i] == trip) {
        this.trips.splice(i, 1)
      }
    } 
  }

  addNewTrip(trip:Trip){
    this.trips.push(trip);

  }

  showAddTripClick(){
    this.showAddTrip = !this.showAddTrip;
  }


}
