import { Injectable } from '@angular/core';
import { IngredientService, IngredientModel } from 'my-api-data';
import {
  BehaviorSubject,
  Observable,
  tap,
  map,
  share,
  switchMap,
  shareReplay,
  debounce,
  debounceTime,
  last,
  concatMap,
  mergeMap,
  ReplaySubject,
  merge,
  throttleTime,
} from 'rxjs';
import { IngredientVm } from '../viewmodels';
export type Ingredient = IngredientVm[] | null;
@Injectable({
  providedIn: 'root',
})
export class IngredientFacade {
  ingredientsObs$: Observable<Ingredient>;
  private ingredientsBS: BehaviorSubject<any>;
  private ingredientRS: ReplaySubject<Ingredient>;

  constructor(private ingredientService: IngredientService<IngredientModel>) {
    this.ingredientRS = new ReplaySubject(1);
    this.ingredientsBS = new BehaviorSubject(null);
    this.ingredientsObs$ = merge(
      this.ingredientsBS.asObservable().pipe(
        throttleTime(1000),
        share(),
        switchMap(() => {
          return this.ingredientService.get().pipe(
            map((data) => {
              return data.map((d) => {
                return <IngredientVm>{
                  ...d,
                };
              });
            })
          );
        }),
        tap((data) => {
          this.ingredientRS.next(data);
        })
      ),
      this.ingredientRS.asObservable()
    );
  }

  fetch() {
    this.ingredientsBS.next(true);
    // this.ingredientService
    //   .get()
    //   .pipe(
    //     map((data) => {
    //       return data.map((d) => {
    //         return <IngredientVm>{
    //           ...d,
    //         };
    //       });
    //     })),
    //     tap((data) => {
    //       this.ingredientsBS.next(data);
    //     })
    //   )
    //   .subscribe();
  }
}
