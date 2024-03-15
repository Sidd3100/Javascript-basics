mySym = Symbol("key");

// console.log(mySym);

myObject = {
    name: "Siddhartha",
    "full name": "Siddhartha Rai",
    [mySym]: "mykey1", 
    email: "siddraimb@gmail.com",
    age : 18,
    branch: "CSE",
    isLoggedIn: true,
    date: ["Monday", "Tuesday"]
}

//Two methods to access objects 
//1. using the . notation
//2. using the [] method

//Note
//All the keys in key-value pair is by default treated as a string
//full name and myobject can only be accessed using the bracket method

// console.log(myObject.name);
// console.log(myObject["full name"]);
// console.log(myObject[mySym]);
// console.log(typeof myObject[mySym]);

myObject.email = "123@gmail.com";
Object.freeze(myObject);
myObject.email = "siddraimb@gmail.com";
console.log(myObject.email);

//This was the literal method to create object

//Now, given below is the singleton object

// const myObj = new Object();

// console.log(myObj);

const tinderObject = {};

tinderObject.id = "123abc";
tinderObject.name = "Siddhartha Rai";
tinderObject.age = 18;

console.log(tinderObject);

//Nested Objects are accessed using the scope operator

const regularUser = {
    email :"siddraimb@gmail.com",
    fullname :{
        firstname :"Siddhartha",
        lastname :"Rai"
    }
}

console.log(regularUser.fullname.firstname)



obj1 = {1:"a",2:"b"}
obj2 = {3:"a", 4:"b"}

//Assign method

const obj3 = Object.assign({},obj1,obj2);


//spread operator
//obj3 = {...obj1,...obj2};

console.log(obj3);

const user =[
    {
        id:"a",
        email:"b"
    },
    {
        id:"c",
        email:"d"
    }

]
console.log(user[0].id);

console.log(tinderObject);
console.log(Object.keys(tinderObject));
console.log(Object.values(tinderObject));
console.log(Object.entries(tinderObject));

console.log(myObject.hasOwnProperty('isLoggedIn'));

