let obj = {
    name: 'sai',
    age: 20
}
// console.log(obj)
// console.log(obj.name)

obj = null

console.log(obj)
console.log(obj?.name)

let emp = {
    name: 'gopi',
    age : 36,
    gender: 'male',
    skillset: {
    isqtb: true ,
    exp: 10,
    selenium: 'beginnar'
    }

}

obj = emp

console.log(obj)
console.log(obj?.name)
console.log(obj.gender)

console.log("end of the program")


