import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Chicken } from './chicken.model';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css'],
  outputs: ['deleteEvent', 'eggEvent']
})
export class ChickenComponent implements OnInit {

  deleteEvent: EventEmitter<string>;
  eggEvent: EventEmitter<string>;

  @Input() chicken: Chicken;

  constructor() { 
    this.deleteEvent = new EventEmitter();
    this.eggEvent = new EventEmitter();
  }

  deleteChicken(name:string):void{
    this.deleteEvent.emit(name); 
  }

  addEgg() {    //<--added
    this.chicken.addEgg();  
    this.eggEvent.emit(null)
  }

  collectEggs() {  //<--added
       this.eggEvent.emit(this.chicken.collectEggs());
  }

  ngOnInit() {
  }

}
