import {isEqual} from "./isEqual";

describe('isEqual', () => {
    it('should return true for identical simple types', () => {
        expect(isEqual(1, 1)).toBeTruthy();
        expect(isEqual('test', 'test')).toBeTruthy();
        expect(isEqual(true, true)).toBeTruthy();
    });

    it('should return false for non-identical simple types', () => {
        expect(isEqual(1, 2)).toBeFalsy();
        expect(isEqual('test', 'test1')).toBeFalsy();
        expect(isEqual(true, false)).toBeFalsy();
    });

    it('should return true for two null values', () => {
        expect(isEqual(null, null)).toBeTruthy();
    });

    it('should return true for two undefined values', () => {
        expect(isEqual(undefined, undefined)).toBeTruthy();
    });

    it('should return false for null and undefined', () => {
        expect(isEqual(null, undefined)).toBeFalsy();
    });

    it('should return true for two empty objects', () => {
        expect(isEqual({}, {})).toBeTruthy();
    });

    it('should return true for two empty arrays', () => {
        expect(isEqual([], [])).toBeTruthy();
    });

    it('should return true for two arrays with same values in same order', () => {
        expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy();
    });

    it('should return false for two arrays with same values in different order', () => {
        expect(isEqual([1, 2, 3], [3, 2, 1])).toBeFalsy();
    });

    it('should return true for two objects with same keys and values', () => {
        expect(isEqual({a: 1, b: 2}, {a: 1, b: 2})).toBeTruthy();
    });

    it('should return false for two objects with same keys and different values', () => {
        expect(isEqual({a: 1, b: 2}, {a: 1, b: 3})).toBeFalsy();
    });

    it('should return false for two objects with different keys', () => {
        expect(isEqual({a: 1, b: 2}, {a: 1, c: 2})).toBeFalsy();
    });

    it('should return true for complex nested structures that are equal', () => {
        const obj1 = {a: 1, b: [1, 2, 3], c: {d: 4}};
        const obj2 = {a: 1, b: [1, 2, 3], c: {d: 4}};
        expect(isEqual(obj1, obj2)).toBeTruthy();
    });

    it('should return false for complex nested structures that are not equal', () => {
        const obj1 = {a: 1, b: [1, 2, 3], c: {d: 4}};
        const obj2 = {a: 1, b: [1, 2, 3], c: {d: 5}};
        expect(isEqual(obj1, obj2)).toBeFalsy();
    });
});
