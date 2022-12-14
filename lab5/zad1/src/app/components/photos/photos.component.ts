import { Component } from '@angular/core';
import {JSONPlaceholderService} from 'src/app/services/jsonplaceholder.service'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  data:Array<any>;

  constructor(private JSONPlaceholder : JSONPlaceholderService){
    this.data = new Array<any>();
    this.JSONPlaceholder.getPhotos().subscribe((data)=>{
      console.log(data)
      this.data = data
  })}

  
}
