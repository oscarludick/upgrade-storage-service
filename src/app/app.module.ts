import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StorageModule, BrowserStorage } from './storage';

@NgModule({
  imports: [
    BrowserModule,
    StorageModule.forRoot({
      imports: BrowserStorage.imports,
      providers: BrowserStorage.providers,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
