function parant(callback){
return callback('')
}
parant((s)=>console.log(s))

const a=[1,2,3,4]
const c=a.map(value=> console.log(value))

// const a=15
console.log(sample());

console.log("1");

function sample(callback){
 setTimeout(() => {
       return callback(callback("2"));
    },0);
}
sample((cb) => console.log(cb))

console.log("3");
console.log('4')
// call back:handle the reading a file and net work requasts and intract with databse

// memmory alocation
// Reference error
// singuress and asingurnes
const obj={
    name:"shaheed",
    age:18,
}
for(let x in obj){
    console.log(obj)
}
const arr=[1,2,3,4]
for(let x of arr){
    console.log(arr[x])
}
// for(let i=0;i<=5;i++){
//     let print=''
//     for(let j=1;j<=i;j++){
//         print+="*"
//     }
//     console.log(print)
// }