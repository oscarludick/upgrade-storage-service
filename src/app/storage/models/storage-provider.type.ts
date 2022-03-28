import { Type } from '@angular/core';

import { IStorage } from './storage.abstract';

export type StorageProvider<T> = {
  provide: typeof IStorage;
  useClass: Type<T>;
}[];
