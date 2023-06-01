import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonClassComponent } from './components/button-class/button-class.component';
import { RedGreenDirective } from './directives/red-green.directive';
import { DisappearDirective } from './directives/disappear.directive';
import { ExclamationPipe } from './pipes/exclamation.pipe';
import { UpperfirstPipe } from './pipes/upperfirst.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonClassComponent,
    RedGreenDirective,
    DisappearDirective,
    ExclamationPipe,
    UpperfirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
