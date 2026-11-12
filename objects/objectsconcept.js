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
//get
console.log(emp)
console.log(emp.age)
console.log(emp.skillset.selenium)
console.log(emp['age'])
console.log(emp['skillset']['exp'])


//put
emp.skillset.selenium=  'advance'
console.log(emp)

//create a new kwy valuse
emp.skillset.playwright= 'true'
console.log(emp)

//deletd
delete emp.skillset.selenium
console.log(emp)





