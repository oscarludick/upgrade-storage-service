import { Inject, Injectable, Optional } from '@angular/core';

import { assert } from './utils';

import { APP_STORAGE_DECORATORS } from './tokens';
import { DecorateStorage, IStorage } from './models';

interface StorageProps<T> {
  key: string;
  value: T;
}

@Injectable()
export class StorageService {
  constructor(
    @Inject(APP_STORAGE_DECORATORS)
    @Optional()
    private readonly _decorators: Array<DecorateStorage>,
    @Optional() private readonly _storage: IStorage
  ) {
    assert(!!this._storage, 'Please provide an storage implementation');
  }

  public set(key: string, value: any) {
    const result = this._iterateDecorators('setProperty', { key, value });
    this._storage.set(result.key, result.value);
  }

  public get<T>(key: string): T {
    const value = this._storage.get(key);
    const result = this._iterateDecorators('getPropety', { key, value });
    return result.value;
  }

  private _iterateDecorators<T>(
    method: keyof DecorateStorage,
    { key, value }: StorageProps<T>
  ): StorageProps<T> {
    let result = { key, value };
    this._decorators?.forEach((decorator) => {
      result = decorator[method](result.key, result.value);
    });
    return result;
  }
}
