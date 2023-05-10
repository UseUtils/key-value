import { CallBack, KeyValueType, StringIndex } from './types';

export class KeyValue {
  static from(objects: StringIndex, callBack?: CallBack): KeyValueType {
    const keys = Object.keys(objects);

    if (callBack) {
      return keys.map((key: string) => callBack(key, objects[key]));
    }

    return keys.map((key: string) => ({
      key: key,
      value: objects[key],
    }));
  }
}
