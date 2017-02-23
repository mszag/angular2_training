import { Component, OnInit, Input } from '@angular/core';
import { Chicken } from './chicken.model';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {

  @Input() chicken: Chicken;

  constructor() { }

  ngOnInit() {
  }

}
