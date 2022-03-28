import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { StorageService } from './storage.service';

import { provideDecorators } from './providers';
import { DecorateStorage, StorageProvider } from './models';

@NgModule({})
export class StorageModule {
  static forRoot<T>(config: {
    storageProvider: StorageProvider<T>;
    decorators?: Array<Type<DecorateStorage>>;
  }): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        config.storageProvider,
        provideDecorators(config.decorators || []),
        StorageService,
      ],
    };
  }
}
