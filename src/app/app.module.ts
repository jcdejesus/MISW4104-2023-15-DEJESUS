import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantasModule } from './plantas/plantas.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PlantasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
