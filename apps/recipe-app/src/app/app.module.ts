import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from 'my-api-data';
import { IngredientModule } from './ingredient/ingredient.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { SelectFruitsComponent } from './select-fruits/select-fruits.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    PokemonAbilitiesComponent,
    SelectFruitsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CoreModule,
    DataModule,
    IngredientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
