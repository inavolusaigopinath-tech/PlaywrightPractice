// object --> JSON // serialization(marshelling)
//JSON --> object // deserializatio(unmarshelling)

// serialization(marshelling)
//object  --> in-memory(heap) 

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
console.log(typeof emp)
let empjson = JSON.stringify(emp) // serialization
console.log(typeof empjson)
console.log(empjson)



let empobj = JSON.parse(empjson)
console.log(typeof empobj)
console.log(empobj)
console.log(empobj['age'])
