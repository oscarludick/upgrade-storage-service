import { Inject, Injectable, Optional } from '@angular/core';

import { assert } from './utils';

import { APP_STORAGE_DECORATORS } from './tokens';
import { DecorateStorage, IStorage } from './models';

interface StorageProps {
  key: string;
  value?: string | object;
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
    const result = this._iterateDecorators('getPropety', { key });
    return this._storage.get(result.key);
  }

  private _iterateDecorators(
    method: keyof DecorateStorage,
    { key, value }: StorageProps
  ): StorageProps {
    let result = { key, value };
    this._decorators?.forEach((decorator) => {
      result = decorator[method](key, value);
    });
    return result;
  }
}
