myObj ={
    id: 1,
    name: "Sidd",
    welcomeMsg: function(){
        console.log(`${this.name}`);
        //console.log(this);
    }
}
//console.log(this);
//myObj.welcomeMsg();

//this inside a function

// function myFunc(){
//     let username ="Sidd"
//     console.log(this.username);
//     console.log(this)
// }

const myFunc = ()=>{
    let username ="Sidd"
    console.log(this.username);
    console.log(this)
}

myFunc()

const addTwo = (num1,num2)=>(num1+num2);


console.log(addTwo(3,4))