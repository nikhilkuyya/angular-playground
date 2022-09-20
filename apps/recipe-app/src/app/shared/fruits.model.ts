export interface CheckPropertyModel {
  checked: boolean;
}

export enum NutritionTypes {
  Fruit = 'fruit',
  Vegetable = 'vegetable',
}

export interface FruitModel extends CheckPropertyModel {
  id: number;
  name: string;
}

export interface VegetableModel extends CheckPropertyModel {
  id: number;
  name: string;
}

export type VegetablesModel = VegetableModel[];
export type FruitsModel = FruitModel[];
export type NutritionsModel = VegetablesModel | FruitsModel;
