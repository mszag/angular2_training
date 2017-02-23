import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  addChicken(name: HTMLInputElement, breed: HTMLInputElement): boolean {
    console.log(`Adding Chicken name: ${name.value} breed: ${breed.value}`);
    return false;
  }
  
}
