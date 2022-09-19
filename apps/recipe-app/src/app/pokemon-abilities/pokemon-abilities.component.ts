import { Component, OnInit } from '@angular/core';
import { PokemonAbilityList, PokemonService } from 'my-api-data';
import {
  BehaviorSubject,
  catchError,
  debounce,
  debounceTime,
  Observable,
  of,
  switchMap,
} from 'rxjs';
@Component({
  selector: 'myorg-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
})
export class PokemonAbilitiesComponent implements OnInit {
  // handle error;
  pokemonAbilities$!: Observable<PokemonAbilityList>;
  private PokemonInput: BehaviorSubject<string>;
  constructor(private pokemonService: PokemonService) {
    this.PokemonInput = new BehaviorSubject('');
    this.pokemonAbilities$ = this.PokemonInput.asObservable().pipe(
      debounceTime(500),
      switchMap((pokemon) => {
        return this.pokemonService.getPokemonAbilties(pokemon);
      })
    );
  }

  ngOnInit(): void {}

  onPokemonInputHandler(evt: Event) {
    if (evt.target && 'value' in evt.target) {
      evt.stopPropagation();
      const pokemon = evt.target['value'] as string;
      this.PokemonInput.next(pokemon);
    }
  }
}
