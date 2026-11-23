// collection of elements
// it can be disimilar datatype 
// not fixed o dynamic 

let x = 10;
let y = 20;
console.log(x)

let num = [10,20,30,40];
console.log(num[2])
console.log(num[10]) // undefined
console.log(num[-2]) // undefined

num[4] = 50

console.log(num[4]) //50
console.log(typeof num)

num[10] = 100

console.log(num[10]) // 100

console.log(num) // [ 10, 20, 30, 40, 50, <5 empty items>, 100 ]

num[7] = 80

console.log(num) //[ 10, 20, 30, 40, 50, <2 empty items>, 80, <2 empty items>, 100 ]

let arr = [1,'a',true,'3.14',10n]

console.log(arr)

console.log("----------------")

// second type of writing  array

let arr2 = Array.of(1,'a',true,'3.14',10n)
console.log(arr2)

let str = "selenium webdriver";
let char = Array.from(str)
console.log(char)
console.log(char[1])

let str1 = "12345";
let char1 = Array.from(str1)
console.log(char1)
console.log(char1[1])




