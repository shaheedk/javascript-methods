function add(num1,num2,callback){
let err=false
if (num1===0){
    err=true

}
callback(num1+num2,err)
}
function multiply(num1,num2,callback){
    callback(num1*num2)
}
function division(num1,num2,callback){
    callback (num1/num2)
}

add(2,10,(sum,err)=>{
    if(err){
        console.log('first number is zero')
    }else{
        console.log(sum)
        multiply(sum,sum,(product)=>{
console.log(product)
        })
        division(20,4,(div)=>{
            console.log(div)
        })
    }

})

// const promise=require('promise')
// function add(num1,num2){
//     return new Promise((resolve,reject)=>{
//         resolve(num1+num2)
//     })
// }
// add(10,20)