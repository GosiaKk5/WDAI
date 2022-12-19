import { Component, OnInit } from '@angular/core';
import {TripsService} from 'src/app/services/trips.service'
import tripsData from '../../../assets/trips.json';
import {FilteredValues} from 'src/assets/filteredValues';
import {Trip} from 'src/assets/trip'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit{
 
  trips: Trip[] = [];

  constructor(private tripsService: TripsService){
  }

  ngOnInit(): void{
    this.tripsService.getTrips().subscribe((trips) => (this.trips = trips));
    //this.trips = this.tripsService.getTrips();
  }

  showAddTrip = false;

  rate=0;
  max=5;
  isReadonly = true;

  filter: FilteredValues;


  add(trip: Trip){
    if (trip.takenSpots < trip.peopleLimit){
      trip.takenSpots += 1;
    } 
    this.tripsService.updateTrip(trip);
  }

  remove(trip: Trip){
    if(trip.takenSpots > 0){
      trip.takenSpots -= 1;
    }   
    this.tripsService.updateTrip(trip);

  }

  count() : number{
    let sum = 0;
    for(let trip of this.trips){
      sum += trip.takenSpots
    }
    return sum;
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

    /*this.trips = this.trips.filter(function(value, index, arr){ 
      return value != trip;});*/

      this.tripsService.deleteTrip(trip);
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
