let num = [ [1,2,3,4],[10,20,30,40],[100,200,300,400]]
num[1][1] = 2000
console.log(num)
console.log(num[2][2])
console.log(num.length)
console.log(num[1].length)

for(let i = 0; i<num.length; i++){
    for(let j = 0; j<num[i].length; j++){
        //console.log(num[i][j])
        process.stdout.write(`${num[i][j]} `)
    }
    console.log()
}

let num1 = [ [1,2,3,4],[10,20,30],[100,200],
[30]]

 for(let i = 0; i<num1.length; i++){
    for(let j =0; j<num1[i].length; j++){
        process.stdout.write(`${num1[i][j]} `)
    }
    console.log()
 }
