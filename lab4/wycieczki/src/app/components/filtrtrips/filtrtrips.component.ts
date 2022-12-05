import { Component } from '@angular/core';

@Component({
  selector: 'app-filtrtrips',
  templateUrl: './filtrtrips.component.html',
  styleUrls: ['./filtrtrips.component.css']
})
export class FiltrtripsComponent {
  rate:number;
  isReadonly = false;
  minPrice: number;
  maxPrice: number;
}
