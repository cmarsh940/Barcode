import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Barcode';
  randomColors = function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(15+1);
  };
  colors = [this.randomColors(), this.randomColors(), this.randomColors(), this.randomColors(),
    this.randomColors(), this.randomColors(), this.randomColors(), this.randomColors(),
    this.randomColors(), this.randomColors(), this.randomColors(), this.randomColors(), ];
}
