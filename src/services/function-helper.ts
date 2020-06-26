/**
 * thanks https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @return {*} the arg or it's first item
 */

// Return if argument supplied is defined
export const def = (x: unknown): boolean => typeof x !== "undefined"

// Return if argument supplied is undefined.
export const undef = (x: unknown): boolean => !def(x)

// Return the first item in an array
export const head = ([x]: any[]): any => x

// Return all but the first item in an array.
export const tail = ([, ...xs]: any[]): any[] => xs

// Returns a copy of an array without using Array.slice()
export const copy = (array: any[]): any[] => [...array]

// Returns if the value supplied is an array
export const isArray = (x: any[]): boolean => Array.isArray(x)

// …applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
export const reduce = ([x, ...xs]: any[], f: Function, memo: any, i: any = 0): any => def(x) ? reduce(xs, f, f(memo, x, i), i + 1): memo

// Similar to reduce, but applies the function from right-to-left.
export const reduceRight = (xs: any[], fn: Function, memo: any): any => reduce(reverse(xs), fn, memo)

// Partially apply a function by filling in any number of its arguments.
export const partial = (fn: Function, ...args: any[]) => (...newArgs: any[]) => fn(...args, ...newArgs)

// Returns a new array with value inserted at given index.
export const slice = ([x, ...xs]: any[], i: any, y: any, curr: any = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
  : []

// Return a new array with 2 items swapped based on their index.
export const swap = (a: any[], i: any, j: any) => (
  map(a, (x,y) => {
    if(y === i) return a[j]
    if(y === j) return a[i]
    return x
  })
)

// filter array by function given
export const partision = (xs: any[], fn: Function) => [filter(xs, fn), reject(xs, fn)]

// Convert function that takes an array to one that takes multiple arguments. This is useful when partially applying.
export const spreadArg = (fn: Function) => (...args) => fn(args);

// Return a reversed array.
export const reverse = (xs: any[]) => reduce(xs, (memo, x) => [x, ...memo], []);

// Return the length of an array
export const length = (xs: any[]) => reduce(xs, (memo, x) => memo + 1, 0);

// creates a new array with the results of calling a provided function on every element in this array.
export const map = (xs: any[], fn: Function) => reduce(xs, (memo, x) => [...memo, fn(x)], []);

// map with arg
export const mapWithArgs = (xs: any[], fn: Function, arg1?: any, arg2?: any) => reduce(xs, (memo, x) => [...memo, fn(x, arg1, arg2)], []);

// creates a new array with all elements that pass the test implemented by the provided function.
export const filter = (xs: any[], fn: Function) =>
  reduce(xs, (memo, x) => (fn(x) ? [...memo, x] : [...memo]), []);

// Returns a new array that contains the first n items of the given array.
export const first = (xs: any[], n: number) =>
  reduce(xs, (memo, x, i) => (i < n ? [...memo, x] : [...memo]), []);

// Returns a new array that contains the last n items of the given array.
export const last = (xs: any[], n: number) =>
  reduce(
    xs,
    (memo, x, i) => (i >= length(xs) - n ? [...memo, x] : [...memo]),
    []
  );

// returns an array that does not pass the filter function.
export const reject = (xs: any[], fn: Function) =>
  reduce(xs, (memo, x) => (fn(x) ? [...memo] : [...memo, x]), []);

// merge multiply array into single array
export const merge = spreadArg(xs => reduce(xs, (memo, x) => [...memo, ...x], []));

// Combines nested arrays into a single array.
export const flatten = (xs: any[]) =>
  reduce(
    xs,
    (memo, x) =>
      x ? (isArray(x) ? [...memo, ...flatten(x)] : [...memo, x]) : [],
    []
  );

// add array field
export const add = spreadArg(([x, ...xs]) => reduce(xs, (memo, x) => memo + x, 0));

// Each function consumes the return value of the function that came before.
export const flow = (...args: any[]) => (init: any) => reduce(args, (memo, fn) => fn(memo), init)

// Extract property value from array.
export const pluck = (key, object) => object[key]

// The same as flow, but arguments are applied in the reverse order. Compose matches up more naturally with how functions are written.
export const compose = (...args) => flow(...reverse(args))

// divide array field
export const divide = spreadArg(([x, ...xs]) => reduce(xs, (memo, y) => memo / y, x));

// multiply array field
export const multiply = spreadArg(([x, ...xs]) =>
  reduce(xs, (memo, y) => memo * y, x)
);
