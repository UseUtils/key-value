import { KeyValue } from '@/index';

describe('KeyValue', () => {
  describe('#parser', () => {
    test('should be return key value', () => {
      const result = KeyValue.from({ '2010': 1, '2011': 2 });

      expect(result).toEqual([
        { key: '2010', value: 1 },
        { key: '2011', value: 2 },
      ]);
    });

    test('should be return key value in custon callback', () => {
      const result = KeyValue.from({ '2010': 1, '2011': 2 }, (key: string, value: unknown) => ({ year: key, value }));

      expect(result).toEqual([
        { year: '2010', value: 1 },
        { year: '2011', value: 2 },
      ]);
    });

    test('should be send an empty object and return an empty array', () => {
      const result = KeyValue.from({});

      expect(result).toEqual([]);
    });
  });
});
