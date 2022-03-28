import { ModuleWithProviders } from '@angular/core';
import {
  LocalStorageModule,
  LocalStorageService,
} from 'angular-2-local-storage';

import { IStorage, StorageProvider } from '../models';

export const Angular2LocalStorage: {
  imports: ModuleWithProviders<LocalStorageModule>[];
  providers: StorageProvider<LocalStorageService>;
} = {
  imports: [
    LocalStorageModule.forRoot({
      prefix: 'app',
      storageType: 'localStorage',
    }),
  ],
  providers: [
    {
      provide: IStorage,
      useClass: LocalStorageService,
    },
  ],
};
