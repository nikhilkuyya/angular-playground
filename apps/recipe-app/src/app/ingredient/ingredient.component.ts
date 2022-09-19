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
  list = new Array(5).fill(1);
  test = 'hello world';
  constructor(private ingredientFacade: IngredientFacade) {
    this.data$ = ingredientFacade.ingredientsObs$;
  }

  trackByItem(...args: any[]) {
    return args[0];
  }
  ngOnInit(): void {
    this.ingredientFacade.fetch();
    // setTimeout(() => {
    //   this.ingredientFacade.fetch();
    // });
  }

  sendElement(ingredientRoot: any) {
    console.log(ingredientRoot, ingredientRoot.dataset);
  }
}
