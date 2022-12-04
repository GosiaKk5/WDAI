import { Component, OnInit } from '@angular/core';
import cars from '../../../assets/zad5/cars.json';


@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit{


  data:any = cars;

  selectedCompany: string;
  selectedModel: string;
  selectedColor: string;

  showModels = false;
  showColors = false;
  showInformation = false;

  constructor(){

  }

  ngOnInit(): void {
    
    
  }

  companyIsChosen(){
    this.showModels = true;
  }

  modelIsChosen(){
    this.showColors = true;
  }

  colorIsChosen(){
    this.showInformation = true;
  }

}
