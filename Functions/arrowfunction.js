// arrow functions
 ()=> console.log("hi....")

 let f1 =  ()=> {
    console.log("hi....")
 }

 f1();

 let f2 = (num)=>{
    console.log(`square root of ${num} is ${Math.sqrt(num)}`)
 }
  f2(25);

  let launchbroswer = (browser) => {
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

