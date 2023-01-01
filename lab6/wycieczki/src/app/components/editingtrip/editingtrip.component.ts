import { Component } from '@angular/core';
import {TripsService} from 'src/app/services/trips.service'
import {Trip} from 'src/assets/trip'
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';



@Component({
  selector: 'app-editingtrip',
  templateUrl: './editingtrip.component.html',
  styleUrls: ['./editingtrip.component.css']
})
export class EditingtripComponent {
  pipe = new DatePipe('en-US');
  
  id: number;
  private routeSub: Subscription;
  trips: Trip[] = [];
  trip: Trip;

  myForm: FormGroup
  newTitle: FormControl;
  newCountry: FormControl;
  newPrice: FormControl;
  newLimit: FormControl;
  newStart: FormControl;
  newEnd: FormControl;
  newDescription: FormControl;
  newImage: FormControl;
  s: string = 'elo';

  showMessage :boolean = false;

  createFormControls() {
    this.myForm = new FormGroup({

      newTitle : new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$")
      ]),
      newCountry : new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]*$")
      ]),
      newPrice : new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      newLimit : new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      newStart : new FormControl(new Date(), Validators.required),
      newEnd : new FormControl(new Date(), Validators.required),
      newDescription : new FormControl("", Validators.required),
      newImage : new FormControl("", Validators.required),
    })
    
  }



  constructor(private route: ActivatedRoute, private tripsService : TripsService, public auth: AuthService) {
    
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

    //this.trip.startDate = formatDate(this.trip.startDate, 'MM/dd/yyyy', 'en-US')

    this.createFormControls();

}

  onSubmit(){
    if(this.myForm.valid){
      this.trip.startDate = this.pipe.transform(this.myForm.value.newStart, 'dd.MM.yyyy')!;
      this.trip.endDate = this.pipe.transform(this.myForm.value.newEnd, 'dd.MM.yyyy')!;
      this.tripsService.updateTrip(this.trip);
      this.showMessage = true;
    }
  }


}
