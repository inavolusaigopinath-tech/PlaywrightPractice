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

console.log(emp)

for(key in emp){
    console.log(key)
    console.log(emp[key])
}

for(key in emp){
    console.log(key,":",emp[key]) // or we ca use + instead of ,
}

//we can also use for of loop , but need to do small convertion

console.log(Object.values(emp))

for(e of Object.keys(emp)){
    console.log(e,':',emp[e])
}
