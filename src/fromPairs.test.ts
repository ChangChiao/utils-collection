const assert = require('assert');

function fromPairs(pairs) {
    const result = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}

test('fromPairs should convert an array of pairs into an object', () => {
    const input = [['a', 1], ['b', 2]];
    const expectedOutput = { a: 1, b: 2 };
    assert.deepStrictEqual(fromPairs(input), expectedOutput);
});

test('fromPairs should return an empty object for an empty array', () => {
    const input = [];
    const expectedOutput = {};
    assert.deepStrictEqual(fromPairs(input), expectedOutput);
});