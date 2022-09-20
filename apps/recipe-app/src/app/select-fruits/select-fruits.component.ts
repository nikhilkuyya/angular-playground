import { SelectorContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FruitsListModel, FruitsModel } from '../shared';
type ListModel = FruitsListModel;
interface MySelectContext {
  list: ListModel;
  name: SelectContextTypes;
}
enum SelectContextTypes {
  Fruit = 'fruit',
  Vegetables = 'vegetables',
}
@Component({
  selector: 'myorg-select-fruits',
  templateUrl: './select-fruits.component.html',
  styleUrls: ['./select-fruits.component.scss'],
})
export class SelectFruitsComponent implements OnInit {
  @Input() fruits!: FruitsListModel;
  @Input() vegetables!: FruitsListModel;
  fruitsContext!: MySelectContext;
  vegetableContext!: MySelectContext;
  allValue = 99;
  constructor() {}

  ngOnInit(): void {
    this.fruitsContext = {
      list: this.fruits,
      name: SelectContextTypes.Fruit,
    };
    this.vegetableContext = {
      list: this.vegetables,
      name: SelectContextTypes.Vegetables,
    };
  }

  isAllChecked(list: ListModel) {
    return list.length === list.filter((item) => item.checked).length;
  }

  checkHandler(evt: Event, list: ListModel, listName: string) {
    if (this.checkDataItemId(evt) && evt.target && 'checked' in evt.target) {
      const id = this.getDataSetItemId(evt) as number;
      const newValue = evt.target['checked'] as boolean;
      console.log(id, evt.target['checked'], evt.target);
      let updatedList: ListModel;
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
      if (listName === SelectContextTypes.Fruit) {
        this.fruits = updatedList;
        this.fruitsContext = {
          ...this.fruitsContext,
          list: this.fruits,
        };
      }
      if (listName === SelectContextTypes.Vegetables) {
        this.vegetables = updatedList;
        this.vegetableContext = {
          ...this.vegetableContext,
          list: this.vegetables,
        };
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

  getUniqueFruitId(index: number, fruit: FruitsModel) {
    return fruit.id;
  }
}
