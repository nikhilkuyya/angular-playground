import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class RecipeService<T> {
  MODULE_URL: string;

  constructor(protected http: HttpClient, protected module_url: string) {
    this.MODULE_URL = module_url;
  }

  get() {
    return this.http.get<T[]>(this.MODULE_URL);
  }
}
