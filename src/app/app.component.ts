import { Component } from '@angular/core';

import { StorageService } from './storage/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private storageService: StorageService) {
    this.storageService.set('test', 'testValue');
    console.log(this.storageService.get('test'));
  }
}
