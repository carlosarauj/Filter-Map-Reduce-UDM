let num = [2,6,24,36,7,3,87]
let numpar = num.filter(function(val){
    return val % 2 == 0   
}).map(function(val){
    return val * 2
}).reduce(function(ac, val){
    return ac + val
})
console.log(numpar)