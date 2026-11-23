// call backs - call some functions
// functions that can be passed as parameter to another function

//call by value
function add(a,b){
    console.log("addition of two number", a,b)
    let c = a+b;
    console.log(c)
}
add(10,20)

//call by obj reference
let emp = {
    name: 'gopi',
    age : 36,
    gender: 'male'
}

function test(obj){
    console.log(obj.name)
}

test(emp)

// callback
function greet(name){
    console.log(`good morning ${name}`)
}

function processgreet(callback){
    let name1 = 'gopi'
    callback(name1)

}

processgreet(greet)

//C:\Users\Gopi\Downloads\Playwright\CarTradeExchange-Automation
