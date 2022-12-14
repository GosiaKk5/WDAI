import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {JSONPlaceholderService} from 'src/app/services/jsonplaceholder.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  data:Array<any>;

  constructor(private JSONPlaceholder : JSONPlaceholderService){
    this.data = new Array<any>();
    this.JSONPlaceholder.getPosts().subscribe((data)=>{
      console.log(data)
      this.data = data
  })}

    myGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    text: new FormControl("", Validators.required)
  });

  onSubmit(){

    if(this.myGroup.valid){
      let post = {
        "userId": 0,
        "id": this.data.length + 1,
        "title": this.myGroup.get('title')!.value,
        "body": this.myGroup.get('text')!.value 
      }
      console.log(JSON.stringify(post));

      this.JSONPlaceholder.sendPost(JSON.stringify(post)).subscribe(res => this.data.splice(0, 0, post));

      this.myGroup.reset();
    }
    

    
  }


}
