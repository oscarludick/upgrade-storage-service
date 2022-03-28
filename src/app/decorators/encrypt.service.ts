import { Injectable } from '@angular/core';

import { DecorateStorage } from '../storage/models';

@Injectable()
export class EncryptService implements DecorateStorage {
  setProperty(
    key: string,
    value: any
  ): { key: string; value: string | object } {
    return {
      key,
      value: 'encriptedValue',
    };
  }
  getPropety(key: string, value: any) {
    return {
      key,
      value,
    };
  }
}
