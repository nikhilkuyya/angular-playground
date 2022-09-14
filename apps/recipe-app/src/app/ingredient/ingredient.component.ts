import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IngredientFacade } from '@myorg/recipe-data';

@Component({
  selector: 'myorg-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent implements OnInit {
  data$: Observable<any> = of(null);
  constructor(private ingredientFacade: IngredientFacade) {
    this.data$ = ingredientFacade.ingredientsObs$;
  }

  ngOnInit(): void {
    this.ingredientFacade.fetch();
    // setTimeout(() => {
    //   this.ingredientFacade.fetch();
    // });
  }
}
