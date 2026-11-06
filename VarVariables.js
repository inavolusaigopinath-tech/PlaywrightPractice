var x ; // declaration

x = 10; // assigment 

console.log(x); 

// redeclaration

var y = 20;
var y = 30;
var y = 40;
console.log(y);


// reassignment

var y = 40;
y = 50;
console.log(y);


//Hoisting, possible for var only

console.log(a) // undefined output is given

var a = 100;

// scope

function test() {
    if(true){
        var b = 100;
    }
    console.log(b)
}

test()



