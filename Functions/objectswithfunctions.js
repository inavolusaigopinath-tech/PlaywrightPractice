let persson = {
    // properties:  key:valuepairs
    name: 'gopi',
    age: 23,

    //behaviours
    domains(){
        console.log('hiii')
    },
    skill(){
        console.log('js,playwright')
    }

}
//------------------------------

console.log(persson)
console.log(persson['name'])
persson.domains()

let persson1 = {
    // properties:  key:valuepairs
    name: 'gopi',
    age: 23,

    //behaviours
    login(){
        console.log(persson1.name+" is online")
    }

}

console.log(persson1)
console.log(persson1['name'])
persson1.login()
//------------------------------

let persson2 = {
    // properties:  key:valuepairs
    name: 'gopi',
    age: 23,

    //behaviours
    login(){
        console.log(this.name+" is online")
    }

}

console.log(persson2)
console.log(persson2['name'])
persson2.login()
