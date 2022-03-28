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
  getPropety(key: string, value: any) {
    console.log(`Retriving ${key} with ${value}`);
    return {
      key,
      value,
    };
  }
}
