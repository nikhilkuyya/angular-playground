import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonAbility, PokemonAbilityList } from './models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonAbilties(pokemon: string): Observable<PokemonAbilityList> {
    return this.http.get(`/pokemon/${pokemon}`).pipe(
      map((data) => {
        return data as PokemonAbilityList;
      })
    );
  }
}
