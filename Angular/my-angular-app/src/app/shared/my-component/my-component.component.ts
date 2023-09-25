import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent {
  price:number = 24.1222;
  isClass1 = true;
  isClass2 = false;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
