import { Component } from '@angular/core';
import { FruitsListModel } from './shared';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon-app';
  fruits: FruitsListModel = [
    {
      id: 1,
      name: 'Apple',
      checked: false,
    },
    {
      id: 2,
      name: 'Avacado',
      checked: false,
    },
  ];

  vegetables: FruitsListModel = [
    {
      id: 1,
      name: 'Carrot',
      checked: false,
    },
    {
      id: 2,
      name: 'Cabbage',
      checked: false,
    },
  ];
}
