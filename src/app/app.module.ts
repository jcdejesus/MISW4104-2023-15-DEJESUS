import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlantasModule } from './plantas/plantas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PlantasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
