const isAnneeBissextile = require('../anneeBissextile');

test('Les année divisibles par 400 sont bissextiles', () => {
    expect(isAnneeBissextile(2000)).toBeTruthy();
})

test('Les année divisibles par 100 mais pas 400 ne sont pas bissextiles', () => {
    expect(isAnneeBissextile(1700)).toBe(false);
    expect(isAnneeBissextile(1800)).toBe(false);
    expect(isAnneeBissextile(1900)).toBe(false);
    expect(isAnneeBissextile(2100)).toBe(false);
})