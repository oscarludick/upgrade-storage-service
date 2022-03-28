export abstract class IStorage<T = boolean, K = any> {
  abstract set(key: string, value: any): T;
  abstract get(key: string): K;
}
