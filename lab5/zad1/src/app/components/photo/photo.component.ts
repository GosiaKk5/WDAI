import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  id: number;
  private routeSub: Subscription;
  photoUrl : string;


  constructor(private route: ActivatedRoute, private JSONPlaceholder : JSONPlaceholderService) { 
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.id = params['id']
    });

      this.JSONPlaceholder.getPhoto(this.id).subscribe((data)=>{
      this.photoUrl = data.url})
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
   /* photoUrl:Array<any>;
    id: number;
    routeSub: any;


    constructor(private JSONPlaceholder : JSONPlaceholderService, private route: ActivatedRoute){

      this.photoUrl = new Array<any>();
      this.JSONPlaceholder.getPhoto(this.id).subscribe((data)=>{
        this.photoUrl = data.url
    })}

    ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
        console.log(params)
        this.id = params['id'] 
      });
    }

    ngOnDestroy() {
      this.routeSub.unsubscribe();
    }*/
}
