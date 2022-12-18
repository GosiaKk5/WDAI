import { Component } from '@angular/core';
import {TripsService} from 'src/app/services/trips.service'
import {Trip} from 'src/assets/trip'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  trips: Trip[] = [];

  constructor(private tripsService: TripsService){
  }

  ngOnInit(): void{
    this.trips = this.tripsService.getTrips();
  }

  getSum() : number{
    let sum = 0;
    for(let trip of this.trips){
      sum += trip.takenSpots * trip.price;
    }
    return sum;
  }

  removeSpots(trip : Trip){
    trip.takenSpots = 0;
  }

}
