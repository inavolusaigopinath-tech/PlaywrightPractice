let x = 20; //declaration
// let x = 30; // parser Cannot redeclare block-scoped variable 'x'.


// reassignment

x = 30;

console.log(x);


//Hoisting

console.log(a)//ReferenceError: Cannot access 'a' before initialization

let a = 100;

// scope

function test() {
    if(true){
        var b = 100;
    }
    console.log(b)
}

test()