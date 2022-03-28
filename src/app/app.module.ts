import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StorageModule, BrowserStorage } from './storage';

@NgModule({
  imports: [
    BrowserModule,
    BrowserStorage.imports,
    StorageModule.forRoot({
      storageProvider: BrowserStorage.providers,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
