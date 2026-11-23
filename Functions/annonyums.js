let a =function (){
    console.log('hi.....')
    return 100
}
console.log(a)
let res = a();
console.log(res)

/**
 * 
 * @param {string} browser 
 */

let launchbroswer =function (browser){
    console.log(`browser is : ${browser}`)
    switch(browser.trim().toLowerCase()){
        case 'chrome': 
            console.log('launching chrome')
            break;
        case 'edge': 
            console.log('launching edge')
            break;
        case 'firefox': 
            console.log('launching firefox')
            break;
        case 'opera': 
            console.log('launching opera')
            break;
        default:
            console.log("Not a valid broswer")

    }
}
launchbroswer('brave')