const promise=new Promise((resolve,reject)=>{
    // resolve(['Javascript','Java'])
    reject('APIs failed')
    });

// const data=async()=>{
//     const respnse=await promise
//    console.log(respnse);
   
// }

const data=async()=>{
    try{
        const respnse=await promise
        console.log(respnse)
    }catch (err){
        console.log(err)
    }
}
data()
 const genericFetchData=async(url)=>{//  generic method use same algurithm for multiple APIs automaticly.ella APIs num tryCatch idanda
    try{
        const response= await fetch(url)
        const data= await response.json()
        return [data,null]
    }catch(error){
      return [null,error]
    }
}

////Protips
const fetchAPIData=async()=>{
 
   const [data,error]= await genericFetchData('https://jsonplaceholder.typicode.com/todos/1')
if (data){
    console.log(data)
    return;
}
    console.log(error)
}
 
fetchAPIData()
