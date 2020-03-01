import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { PersonnesService } from './personnes.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonnesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
