// standard named function
// function experssion
// Arrow functions
// anonymus
// callback
// Method
// constructor
// IIFE

// standard named function

test() // functions are hoisted
function test(){
    console.log('testing funtion')
}

test();

// console.log(x)
// let x = 10;

//function with no paramaters and no return
function test1(){
    console.log('testing funtion')
}

test1();

//function with no parameter and some return

function greet(){
    let wish = "morning"
    return wish

}
let a = greet()
console.log("good "+a)
//function with some parmeter and no return

function add(a,b){
    console.log("addition of two number", a,b)
    let c = a+b;
    console.log(c)
}
add(10,20)

/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function add1(a,b){
    console.log("addition of two number", a,b)
    let c = a+b;
    console.log(c)
}
add1(10,'gopi')




