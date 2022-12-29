import { DatePipe } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FilteredValues} from 'src/assets/filteredValues'
import {Trip} from 'src/assets/trip'

@Component({
  selector: 'app-filtrtrips',
  templateUrl: './filtrtrips.component.html',
  styleUrls: ['./filtrtrips.component.css']
})
export class FiltrtripsComponent implements OnInit{

  pipe = new DatePipe('en-US');

  @Input('trips') trips: Trip[] = [];
  @Output() emitFilter = new EventEmitter();
  isReadonly = false;
  minPrice: number;
  maxPrice: number;

  chosenCountries: string[] = [];
  chosenStartDate: string = "";
  chosenEndDate: string = "";
  chosenRate: number = 0;
  chosenMinPrice: number = -1;
  chosenMaxPrice: number = Infinity;


  countries: string[] = [];

  ngOnInit(){
  }

  

  getCountries(){

    let a = [];

    for(let i = 0; i < this.trips.length; ++i){
      a.push(this.trips[i].country)
    }

    this.countries = a.filter((item, i, ar) => ar.indexOf(item) === i);
    return this.countries
  }

  getMinPrice() : number{
    let minTrip = this.trips[0];

    for(let trip of this.trips){
      if(minTrip.price > trip.price){
        minTrip = trip;
      }
    }

    return minTrip.price;
  }

  getMaxPrice(): number{
    let maxTrip = this.trips[0];

    for(let trip of this.trips){
      if(maxTrip.price < trip.price){
        maxTrip = trip;
      }
    }

    return maxTrip.price;
  }

  restartStars(){
    this.chosenRate = 0;
    this.filtrNow();
  }

  filtrNow(){
    let filter = {
      countries: this.chosenCountries,
      startDate: this.pipe.transform(this.chosenStartDate, 'dd.MM.yyyy')!,
      endDate: this.pipe.transform(this.chosenEndDate, 'dd.MM.yyyy')!,
      rate: this.chosenRate,
      minPrice: this.chosenMinPrice,
      maxPrice: this.chosenMaxPrice
      
    } as FilteredValues

    this.emitFilter.emit(filter);
  }

  


}
