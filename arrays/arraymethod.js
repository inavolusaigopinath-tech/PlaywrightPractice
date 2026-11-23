//array methods

//push pop shift, unshift slice 

//push
let test = ['test1','test2', 'test3', 'test4']
console.log(test)

test.push('test5','test6',3,true)// Appends new elements to the end of an array, and returns the new length of the array.
console.log(test)


// Array.pop(): T | undefined
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


test.pop(); // r
console.log(test)
console.log( test.pop())
console.log(test)
console.log( test.pop('test7'))
console.log(test)


let x = [];

console.log(x.pop())
console.log(x)  

console.log(test)

//ushift
//add element in begining
test.unshift('test0')
console.log(test)

//shift
test.shift()
console.log(test.shift())
console.log(test)

//splice
//add/remove/replace

//remove
let test1 = ['test1','test2', 'test3', 'test4']
console.log(test1)
test1.splice(2,3)
console.log(test1)
test1.splice(0,1,"Test6","test7")
console.log(test1)



//add /replace


//slice - returns new array with new indexes
let test2 = ['test1','test2', 'test3', 'test4','test5']
test2.slice(2,3)
console.log(test2)






