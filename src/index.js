console.log("this is index.js");
function add(...params) {
    if(!params.length) 
        return 0;
    let sum = 0
    params.forEach(val => {
        sum += Number(val)
    })
    return sum
}
alert(add(1,2,3,4))