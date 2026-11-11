// ++ --
// post increment
let a = 1;
let b = a++
console.log(a)
console.log(b)

let x = -99
let y = x++
console.log(x)
console.log(y)

// pre increment

let a1 = 1;
let b1 = ++a1
console.log(a1)
console.log(b1)

let x1 = -99
let y1 = ++x1
console.log(x1) 
console.log(y1)

//post decrement 
let a2 = 1;
let b2 = a2--
console.log(a2) //0
console.log(b2) // 1

let x2 = -99
let y2 = x2--
console.log(x2) //-100
console.log(y2) //-99

//pre decrement

let a3= 1;
let b3= --a3
console.log(a3) //0
console.log(b3) //0

let x3 = -99
let y3 = --x3
console.log(x3) //-100
console.log(y3) //-100

let p = 10;
let q = p++ + ++p;
console.log(p, q);

10
11
11

let p1 = 10;
let q1 = ++p1 + p1++;
let c = p1;
console.log(p1, q1, c);







