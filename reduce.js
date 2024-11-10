
        const sampleArr=[13,4,6,78,3]
    
//   sum using for loop
// let sum=0
//  for(let i=0;i<sampleArr.length;i++){
//     sum=sum+sampleArr[i]
//  }
 //console.log(sum)
    const newArray=sampleArr.reduce((total,value)=>total+value,0)
   console.log(newArray)
   