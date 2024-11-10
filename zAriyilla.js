


 const arr = [1,2,4]
 const arr1 = [...arr,4,8]
 console.log(arr1);
 console.log(arr)



const sample="12345"
  let res = sample.split("")

 let a= res.filter(element =>  Number(element) %2 !== 0);
 let red= a.reduce((acc,vl) =>  acc + vl,0)

 console.warn('hey');
 
// console.log(a);
console.log(red)