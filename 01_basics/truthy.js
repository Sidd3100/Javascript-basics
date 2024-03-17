//Falsy values - they are always assumed to be false

// false , 0 , -0, BigInt 0n , '' ,  unefined, null ,NaN

//Truthy Values:

// '0' , {}, [], 'false'

const truthy = {};

if(truthy) console.log("Empty Object is Truthy");
else console.log("Empty Object is falsy");

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator ?? : null undefined

const test = null ?? 10;

console.log(test);

//Ternary Operator

const age = 20;

age <=18 ? console.log('age <18'): console.log("age>= 18");

