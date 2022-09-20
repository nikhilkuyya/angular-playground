import { Component } from '@angular/core';
import { FruitsModel, VegetablesModel } from './shared';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon-app';
  fruits: FruitsModel = [
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

  vegetables: VegetablesModel = [
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
