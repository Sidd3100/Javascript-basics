//Immediately Invoked Function Expressions

(function conn(){
    console.log("DB COnnected")
})();

//Semicolon is important to end the scope if you writing 
//more than one iife

(() =>{
    console.log("DB COnnected")
})();