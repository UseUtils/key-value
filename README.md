# Key Value

Key Value is an package to help the transfrom object in orher key value object:

## Here some examples

```ts
KeyValue.from(object, callback);
```

```ts
KeyValue.from({ 2010: 1 });
// return [{ key: 2010, value: 1 }]
```

```ts
KeyValue.from({ Foo: 'Bar' }, (key, value) => ({ title: key, text: value }));
// return [{ title: "Foo", text: "Bar" }]
```
