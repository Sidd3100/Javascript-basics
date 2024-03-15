mySym = Symbol("key");

console.log(mySym);

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

console.log(myObject.name);
console.log(myObject["full name"]);
console.log(myObject[mySym]);
console.log(typeof myObject[mySym]);

myObject.email = "123@gmail.com";
Object.freeze(myObject);
myObject.email = "siddraimb@gmail.com";
console.log(myObject.email);




