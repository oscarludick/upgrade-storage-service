import { InjectionToken } from '@angular/core';

import { DecorateStorage } from '../models';

export const APP_STORAGE_DECORATORS = new InjectionToken<DecorateStorage[]>(
  'DecorateStorage'
);
