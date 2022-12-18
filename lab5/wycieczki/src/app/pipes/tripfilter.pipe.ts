import { Pipe, PipeTransform } from '@angular/core';
import { FilteredValues } from 'src/assets/filteredValues';
import {Trip} from 'src/assets/trip'
@Pipe({
  name: 'tripfilter'
})
export class TripfilterPipe implements PipeTransform {

  dateToCompare(date: string){
      let splitDate = date.split('.');
      let newDate = splitDate[2] + splitDate[1] + splitDate[0];
      return newDate;
  }

  transform(trips: Trip[], filter : FilteredValues): Trip[]{

    if(trips && filter){

      return trips.filter((trip) => {
        return (filter.countries.length === 0 ? true : filter.countries.indexOf(trip.country) > -1) &&
               ((filter.minPrice <= trip.price && filter.maxPrice >= trip.price) ? true : false ) &&
               (filter.rate <= trip.rate) &&
               (filter.startDate === null ? true :this.dateToCompare(trip.startDate) >= this.dateToCompare(filter.startDate)) &&
               (filter.endDate === null ? true : this.dateToCompare(trip.endDate) <= this.dateToCompare(filter.endDate))

      }
      
      
      
      );
    }
    return trips;

  }}
