import { Injectable, ModuleWithProviders } from '@angular/core';

import { IStorage, StorageProvider } from '../models';

@Injectable()
export class BrowserStorageService extends IStorage<void, string> {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    return localStorage.getItem(key);
  }
}

export const BrowserStorage: {
  imports: ModuleWithProviders<void>[];
  providers: StorageProvider<BrowserStorageService>;
} = {
  imports: [],
  providers: [
    {
      provide: IStorage,
      useClass: BrowserStorageService,
    },
  ],
};
