const isAnneeBissextile = require('../anneeBissextile');

test('Les années divisibles par 400 sont bissextiles', () => {
    expect(isAnneeBissextile(2000)).toBeTruthy();
})

test('Les années divisibles par 100 mais pas 400 ne sont pas bissextiles', () => {
    expect(isAnneeBissextile(1700)).toBe(false);
    expect(isAnneeBissextile(1800)).toBe(false);
    expect(isAnneeBissextile(1900)).toBe(false);
    expect(isAnneeBissextile(2100)).toBe(false);
})

test('toutes les années divisibles par 4 mais pas par 100 sont des années bissectiles', () => {
    expect(isAnneeBissextile(2008)).toBeTruthy();
    expect(isAnneeBissextile(2012)).toBeTruthy();
    expect(isAnneeBissextile(2016)).toBeTruthy();
})

test('Toutes les années non divisibles par 4 ne sont PAS des années bissextiles', () => {
    expect(isAnneeBissextile(2017)).toBe(false);
    expect(isAnneeBissextile(2018)).toBe(false);
    expect(isAnneeBissextile(2019)).toBe(false);
})