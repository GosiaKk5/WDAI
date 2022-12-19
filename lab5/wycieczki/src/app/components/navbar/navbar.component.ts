import { Component } from '@angular/core';
import {TripsService} from 'src/app/services/trips.service'
import {Trip} from 'src/assets/trip'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  trips: Trip[] = [];

  constructor(private tripsService: TripsService){
  }

  ngOnInit(): void{
    //this.trips = this.tripsService.getTrips();
    this.tripsService.getTrips().subscribe((trips) => (this.trips = trips));
  }

  getSum() : number{
    let sum = 0;
    for(let trip of this.trips){
      sum += trip.takenSpots * trip.price;
    }
    return sum;
  }

  count() : number{
    let sum = 0;
    for(let trip of this.trips){
      sum += trip.takenSpots
    }
    return sum;
  }

  dateToCompare(date: string){
    let splitDate = date.split('.');
    let newDate = splitDate[2] + splitDate[1] + splitDate[0];
    return newDate;
}

  first(){
    let trip !: Trip;
    let show = false;
    let startDate = "40112022";


    for(let t of this.trips){
      if(t.takenSpots > 0){
        if(this.dateToCompare(t.startDate) < startDate){
          trip = t;
          startDate = this.dateToCompare(t.startDate)
          show = true;
        }
      }
    }
    if(show){
      return trip.title
    }else{
      return "brak"
    }
    

}}
