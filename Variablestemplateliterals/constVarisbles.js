const PI = 3.14; //declaration

// const PI = 3.14; Cannot redeclare block-scoped variable 'PI'.
console.log(PI);


// reassignment

//PI = 10; // TypeError: Assignment to constant variable.

console.log(PI); //TypeError: Assignment to constant variable.

//Hoisting

console.log(a) //ReferenceError: Cannot access 'a' before initialization

const a = 100;


// scope

function test() {
    if(true){
        var b = 100;
    }
    console.log(b)
}

test()
