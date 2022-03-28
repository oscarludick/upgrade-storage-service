import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { StorageService } from './storage.service';

import { provideDecorators } from './providers';
import { DecorateStorage, StorageProvider } from './models';

@NgModule({})
export class _StorageModule {}

export class StorageModule {
  static forRoot(config: {
    imports: any[];
    providers: StorageProvider<any>;
    decorators?: Array<Type<DecorateStorage>>;
  }): _StorageModule {
    return NgModule({
      imports: [],
      providers: [
        config.providers,
        provideDecorators(config.decorators || []),
        StorageService,
      ],
    })(_StorageModule);
  }
}
