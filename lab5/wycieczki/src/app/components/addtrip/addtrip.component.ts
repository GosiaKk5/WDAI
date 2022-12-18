import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Trip} from 'src/assets/trip'
import { DatePipe } from '@angular/common'
import {TripsService} from 'src/app/services/trips.service'

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent {

  pipe = new DatePipe('en-US');
  @Output() onAddTrip: EventEmitter<Trip> = new EventEmitter();
  constructor(private tripsService: TripsService){
  }

  trips: Trip[] = [];

  ngOnInit(): void{
    this.trips = this.tripsService.getTrips();
    this.createFormControls();
  }

  myForm: FormGroup
  newTitle: FormControl;
  newCountry: FormControl;
  newPrice: FormControl;
  newLimit: FormControl;
  newStart: FormControl;
  newEnd: FormControl;
  newDescription: FormControl;
  newImage: FormControl;

  createFormControls() {
    this.myForm = new FormGroup({

      newTitle : new FormControl("", [
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

  onSubmit() {

   if(this.myForm.valid){
    const newTrip: Trip = {
      id: this.trips.length,
      title: this.myForm.value.newTitle,
      country: this.myForm.value.newCountry,
      startDate:  this.pipe.transform(this.myForm.value.newStart, 'dd.MM.yyyy')!,
      endDate: this.pipe.transform(this.myForm.value.newEnd, 'dd.MM.yyyy')!,
      rate: 0,
      price: this.myForm.value.newPrice,
      peopleLimit: this.myForm.value.newLimit,
      takenSpots: 0,
      description: this.myForm.value.newDescription,
      image: this.myForm.value.newImage,
    }

    this.tripsService.addTrip(newTrip);

    this.onAddTrip.emit(newTrip);
    this.myForm.reset();
   }
  }
  

}
