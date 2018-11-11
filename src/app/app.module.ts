import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonSquareComponent } from './board/common-square/common-square.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CommonSquareComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
