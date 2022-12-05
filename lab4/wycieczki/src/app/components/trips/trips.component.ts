import { Component, OnInit } from '@angular/core';
import tripsData from '../../../assets/trips.json';
import {FilteredValues} from 'src/assets/filteredValues';
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

  filter: FilteredValues;

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

  findTheCheapest(trips : Trip[]) : Trip{
    let minTrip = trips[0];

    for(let trip of trips){
      if(minTrip.price > trip.price){
        minTrip = trip;
      }
    }

    return minTrip;
  }

  findTheMostExpensive(trips : Trip[]): Trip{
    let maxTrip = trips[0];

    for(let trip of trips){
      if(maxTrip.price < trip.price){
        maxTrip = trip;
      }
    }

    return maxTrip;
  }

  removeTrip(trip : Trip){

    this.trips = this.trips.filter(function(value, index, arr){ 
      return value != trip;});

    console.log("buuuuu")
  }

  addNewTrip(trip:Trip){
    this.trips.push(trip);

  }

  showAddTripClick(){
    this.showAddTrip = !this.showAddTrip;
  }

  getFilter(filter : FilteredValues){
    this.filter = filter;
    console.log(this.filter)
  }

  useFilter(){
    return this.filter;
  }


}
