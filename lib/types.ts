type KeyValueEntity = {
  key: string;
  value: unknown;
};

type Error = {
  type: string;
  description: string;
};

export type CallBack = (key: string, value: unknown) => any;

export type StringIndex = {
  [key: string]: unknown;
};

export type KeyValueType = KeyValueEntity[] | Error;
