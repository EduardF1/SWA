const {add, greater, get, pipe1, pipe2} = require('../src/exercise_4_5');

describe('Curried functions', () => {
    let test = {
        _:0,
        a:1,
        b:2,
        c:3
    };
    it(`should add ${test.a} and ${test.b}`, () => {
        expect(add(test.a, test.b)).toEqual(test.c);
    });
    it(`should compare ${test.a} and ${test.b}`, () => {
        expect(greater(test.a, test.b)).toBe(false);
    });
    it(`should get a value from an array`, () => {
        expect(get(test._, [test.a, test.b,test.c])).toBe(test.a);
    });
    it(`should use pipe1 to output 8`, () => {
        expect(pipe1(f)(g)(test.c)).toBe(Math.pow(test.b, test.c));
    });
    it(`should use pipe2 to output 8`, () => {
        expect(pipe2(f,g)(test.c)).toBe(Math.pow(test.b, test.c));
    });
});