import { Component } from '@angular/core';

@Component({
  selector: 'app-zad6',
  templateUrl: './zad6.component.html',
  styleUrls: ['./zad6.component.css']
})
export class Zad6Component {

  selectedFirst = false;
  selectedSecond = false;
  selectedThird = false;

  firstIsSelected(){
    this.selectedFirst = true;
    this.selectedSecond = false;
    this.selectedThird = false;
  }

  secondIsSelected(){
    this.selectedFirst = false;
    this.selectedSecond = true;
    this.selectedThird = false;
  }

  thirdIsSelected(){
    this.selectedFirst = false;
    this.selectedSecond = false;
    this.selectedThird = true;
  }

}
