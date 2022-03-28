import { Injectable } from '@angular/core';

import { DecorateStorage } from '../storage/models';

@Injectable()
export class EncryptService implements DecorateStorage {
  private _value: any;
  setProperty(
    key: string,
    value: any
  ): { key: string; value: string | object } {
    this._value = value;
    return {
      key,
      value: 'encriptedValue',
    };
  }
  getPropety(key: string) {
    return {
      key,
      value: this._value,
    };
  }
}
