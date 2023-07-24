import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalDetailComponent } from './animal/animal-detail/animal-detail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnimalDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
