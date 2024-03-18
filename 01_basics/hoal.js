//Higher Order Array Loops

//for of 

const num = [2,3,4,5];

for (i of num){
  //  console.log(i)
}

const greeting  = "Hello World!";

for( letter of greeting){
   // console.log(letter);
}

//Maps

const map = new Map();

map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')

for([key, value] of map){
    //console.log(key , value);
}

//Objects : for of is not iterable on objects
//For objects we use for in iteration method
//similarly, for in iteration is not defined for maps
const obj = {
    name:"siddhartha",
    batch:"F4",
    branch:"CSE"
}

for(key in obj){
   // console.log(key, obj[key]);
}

//Array

const arr =['a','b','c','d'];

for(key in arr){
   // console.log(key, arr[key]);
}

for(key of arr){
   // console.log(key);
}

//forEach

const arr2 = ['a','b','c','d'];

// arr2.forEach((val)=>{
//     console.log(val);
// });

// function printME(val){
//     console.log(val);
// }

// arr2.forEach(printME);

arr2.forEach((val,index,arr1)=>{
    console.log(val,index,arr1);
})

//NOte: ForEach doesnot returns anything