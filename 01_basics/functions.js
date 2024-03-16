// function addTwonumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwonumbers(3,4)

function addTwonumbers(num1,num2){
    let result = num1+num2
    return result ;
}

const result = addTwonumbers(3,4)

console.log(result)

function greetUser(username){
    if(!username){
        return `Enter username`;

    }
    return `${username} just logged in `
}

console.log(greetUser('Sid'))
console.log(greetUser())

//Rest Operator

function CalculatePrice(val1,val2,...num1){
    return num1;

}

console.log(CalculatePrice(200,400,500,600))

//Passing objects and arrays

const user1 = {
    id:1,
    name:"sid"
}

const user2 =[ 'sid','rai']

function handleObject(user1){
    return `username: ${user1.name} , id: ${user1.id}`
}

function handleArray(user2){
    return user2[0] + user2[1]
}

console.log(handleObject(user1));
console.log(handleArray(user2));