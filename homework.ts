// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A:string

let c = [true, false, false];
// A: all boolean

let d = { age: number };
// A: dictionary

let e = [3]
// A:array

let f;
// A:any

let g = []
// A:array



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:needs a value for release year

let prices = [100, 200, 300];
prices[0] = '$100';
// A: value of prices is a string instead of a number

function myFunc(a: number, b: number): number { }
// A: not sure what's wrong here seems ok


