import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { review } from 'src/assets/review';

@Component({
  selector: 'app-opinionform',
  templateUrl: './opinionform.component.html',
  styleUrls: ['./opinionform.component.css']
})
export class OpinionformComponent {

  @Output() newReviewEvent = new EventEmitter<review>();
  pipe = new DatePipe('en-US');

  myForm: FormGroup;
  title: FormControl;
  nick: FormControl;
  date: FormControl;
  rate: FormControl;
  text: FormControl;

  submited:boolean;

  newRate: number;

  ngOnInit(): void{
    this.submited = false;
    this.createFormControls();
  }

  createFormControls() {
    this.myForm = new FormGroup({

      nick: new FormControl("", [
        Validators.required
      ]),
      title: new FormControl("", [
        Validators.required
      ]),
      date : new FormControl(),
      rate : new FormControl([
        Validators.required
      ]),
      text : new FormControl("", [
        Validators.required,
        Validators.pattern("(.{50,500})")
      ])
    })
    
  }


  onSubmit(){

    this.submited = true;

    if(this.myForm.valid){
      const newReview: review = {
        nick: this.myForm.value.nick,
        tripTitle: this.myForm.value.title,
        date: this.pipe.transform(this.myForm.value.date, 'dd.MM.yyyy')!,
        rate: this.myForm.value.rate,
        text: this.myForm.value.text
      }

      this.newReviewEvent.emit(newReview);
      this.myForm.reset();
    }
    
  }

}
