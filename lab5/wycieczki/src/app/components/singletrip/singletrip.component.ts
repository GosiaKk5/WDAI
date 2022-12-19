import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/assets/trip';

@Component({
  selector: 'app-singletrip',
  templateUrl: './singletrip.component.html',
  styleUrls: ['./singletrip.component.css']
})
export class SingletripComponent {

  id: number;
  private routeSub: Subscription;
  photoUrl : string;
  trips: Trip[] = [];

  trip: Trip;



  constructor(private route: ActivatedRoute, private tripsService : TripsService) { 
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.id = params['id']
    });

    //this.trips = this.tripsService.getTrips();
    this.tripsService.getTrips().subscribe((trips) => (this.trips = trips));
    this.tripsService.getTrips().subscribe((trips) =>{
      for(let trip of trips){
        if(trip.id == this.id){
          this.trip = trip
        }
      }
    })
    
    
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  add(){
    if (this.trip.takenSpots < this.trip.peopleLimit){
      this.trip.takenSpots += 1;
    } 
    this.tripsService.updateTrip(this.trip);
  }

  remove(){
    if(this.trip.takenSpots > 0){
      this.trip.takenSpots -= 1;
    }   
    this.tripsService.updateTrip(this.trip);

  }

}
