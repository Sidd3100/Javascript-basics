//Filter

const arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.filter((val)=>{
//     return val>=4;
// })

const newArr = arr.filter((val)=>val>=4)

//console.log(newArr);

//Maps

const myMap = arr.map((val)=> val+10);

//console.log(myMap)

//Chaining

const myMap1 = arr.map((val) => val+100).map((val)=>val+2).filter((val)=>val>42);

//console.log(myMap1);

//Reduce 

const sumulateReduce = arr.reduce((acc,currval)=>{
    console.log(acc, currval);
    return acc+currval;
})

console.log(sumulateReduce);

const reduceArr = arr.reduce((acc,currval)=>acc+currval,0)

console.log(reduceArr);