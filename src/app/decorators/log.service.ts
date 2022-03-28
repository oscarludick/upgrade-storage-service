import { Injectable } from '@angular/core';

import { DecorateStorage } from '../storage/models';

@Injectable()
export class LogService implements DecorateStorage {
  setProperty(
    key: string,
    value: any
  ): { key: string; value: string | object } {
    console.log(`Storing ${key} with value: ${value}`);
    return {
      key,
      value,
    };
  }
  getPropety(key: string) {
    console.log(`Retriving ${key}`);
    return {
      key,
      value: '',
    };
  }
}
