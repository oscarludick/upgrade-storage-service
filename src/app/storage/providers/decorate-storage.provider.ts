import { Provider, Type } from '@angular/core';

import { APP_STORAGE_DECORATORS } from '../tokens';

import { DecorateStorage } from '../models';

export const provideDecorators = (
  decorators: Type<DecorateStorage>[]
): Provider[] => {
  return decorators.map((decorator) => ({
    provide: APP_STORAGE_DECORATORS,
    useClass: decorator,
    multi: true,
  }));
};
