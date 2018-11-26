import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HoverDirective } from './hover.directive';
import { ShowMoviesDirective } from './showmovie.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HoverDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
