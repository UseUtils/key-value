<div align="center">
  <img src="public/hero.svg"/>
  <h1>Key Value</h1>
</div>

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
