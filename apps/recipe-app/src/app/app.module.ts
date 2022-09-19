import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from 'my-api-data';
import { IngredientModule } from './ingredient/ingredient.module';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    PokemonAbilitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    DataModule,
    IngredientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
