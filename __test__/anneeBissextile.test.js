const isAnneeBissextile = require('../anneeBissextile');

test('Les année divisibles par 400 sont bissextiles', () => {
    expect(isAnneeBissextile(2000)).toBeTruthy();
})