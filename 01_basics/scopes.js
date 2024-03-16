//Global vs block scope

let a = 40;
const b=500;
var c =60

if(true ){
    const a =10;
    const b = 10
    // console.log(a);
    // console.log(b)
    // console.log(c)
    var c =10;
}
// console.log(a);
// console.log(b)
// console.log(c);

function One(){
    const username ="siddhartha";
    function Two(){
        const branch = "CSE"
        console.log(username);
    }
    
    // console.log(branch)
    Two()
}
One();

//Interesting concept of function declaration

console.log(myName("Siddhartha"))
function myName(username){
    return username;
}

// console.log(myName2(Siddhartha))
const myName2 = function(username){
    return username;
}
console.log(myName2("Siddhartha"))