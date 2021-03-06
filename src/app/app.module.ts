import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LogService } from './decorators/log.service';
import { EncryptService } from './decorators/encrypt.service';

import { StorageModule, Angular2LocalStorage, BrowserStorage } from './storage';

@NgModule({
  imports: [
    BrowserModule,
    StorageModule.forRoot({
      imports: BrowserStorage.imports,
      providers: BrowserStorage.providers,
      decorators: [LogService, EncryptService],
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
