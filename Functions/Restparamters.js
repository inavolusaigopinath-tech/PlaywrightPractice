// function add(a,b){
//     let result = a+b
//     console.log(result)
// }

// add(10,20)

// function add(a,b,c){
//     console.log(c)
//     let result = a+b+c
//     console.log(result)
// }

// add(10,20,30)

// use case is for multi select dropdown
function add(...num){
    console.log(num.length)
    let result = 0;
    for(let e of num){
        result = result+e
    }
    console.log(result)

}

add(10,20,30)