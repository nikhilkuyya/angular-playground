import { SelectorContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {
  FruitsModel,
  FruitModel,
  NutritionsModel,
  VegetablesModel,
  NutritionTypes,
  VegetableModel,
} from '../shared';

@Component({
  selector: 'myorg-select-fruits',
  templateUrl: './select-fruits.component.html',
  styleUrls: ['./select-fruits.component.scss'],
})
export class SelectFruitsComponent implements OnInit {
  @Input() fruits!: FruitsModel;
  @Input() vegetables!: VegetablesModel;
  fruitType = NutritionTypes.Fruit;
  vegetableType = NutritionTypes.Vegetable;
  allValue = 99;
  constructor() {}

  ngOnInit(): void {}

  isAllChecked(list: NutritionsModel) {
    return list.length === list.filter((item) => item.checked).length;
  }

  checkHandler(evt: Event, list: NutritionsModel, listName: NutritionTypes) {
    if (this.checkDataItemId(evt) && evt.target && 'checked' in evt.target) {
      const id = this.getDataSetItemId(evt) as number;
      const newValue = evt.target['checked'] as boolean;
      console.log(id, evt.target['checked'], evt.target);
      let updatedList: NutritionsModel;
      if (id === this.allValue) {
        updatedList = list.map((item) => {
          return Object.assign({}, item, { checked: newValue });
        });
      } else {
        updatedList = list.map((item) => {
          console.log(item.id, id);
          if (item.id === id) {
            console.log('here');
            return Object.assign({}, item, { checked: newValue });
          } else {
            return Object.assign({}, item);
          }
        });
      }
      if (listName === NutritionTypes.Fruit) {
        this.fruits = updatedList;
      }
      if (listName === NutritionTypes.Vegetable) {
        this.vegetables = updatedList;
      }
    }
  }

  private getDataSetItemId(evt: Event): number {
    let id: number;
    if (
      this.checkDataItemId(evt) &&
      evt.target &&
      'dataset' in evt.target &&
      'itemId' in evt.target['dataset']
    ) {
      id = evt.target['dataset']['itemId'] as number;
    } else {
      id = -1;
    }
    return +id;
  }

  private checkDataItemId(evt: Event) {
    return (
      evt &&
      evt.target &&
      'dataset' in evt.target &&
      'itemId' in evt.target['dataset']
    );
  }

  getUniqueFruitId(index: number, nutrition: FruitModel | VegetableModel) {
    return nutrition.id;
  }
}
