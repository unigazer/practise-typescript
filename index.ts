// Object
let obj: object = {};

// Boolean
let bool: boolean = true;

// Number
let number: number = 0;

// String
let string: string = '';

// Array
let arrayNum: number[] = [0, 1, 2];

// Generic array type
let genericArr: Array<number> = [0, 1, 2];

// Tuple
let tuple: [string, number];
tuple = ['', 0];

// Any
let any: any = 0;

// A function that returns a string result
function test(): String {
    return 'Hello!';
}

// NULL and undefined
let u: undefined = undefined;
let n: null = null;

// "Never", a function that throws an error
function isError(message: string): never {
    throw new Error(message);
}
