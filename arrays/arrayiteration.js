// array iteration

//1. for loop(indexed)
//2. for of loop
//3. for each loop(will be disscused  after arrow functions)
//4. for in loop

let num = [10,20,30,40]
console.log(num.length);

//1. for loop(indexed)
for( let i=0;i<num.length;i++){
    console.log(num[i])
}
console.log("-------------")
for(let i=num.length-1;i>=0;i--){
    console.log(num[i])
}


//2. for of loop for traverse
for(let e of num){
    console.log(e)
}
//disadvantage: always forword direction, no backward

//4. for in loop

// for(let )





//3. for each loop(will be disscused  after arrow functions)