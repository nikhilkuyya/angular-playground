import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class IngredientService<T> extends RecipeService<T> {
  constructor(http: HttpClient) {
    super(http, 'ingredients');
  }
}
