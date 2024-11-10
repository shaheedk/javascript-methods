// async used for symplify the code of Promises

// async/await 
// async/await working on a function.can't use directly
const promise=new Promise((resolve,reject)=>{
    resolve(['Javascript','Java'])
    // reject('APIs failed')
    });
  
    // promise        
    // .then((response)=>{
    //     console.log(response)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })


//   async function fetchData(){
//      const response=await promise
//      console.log(response)
//     }

//  const fetchData=async() => {
//     const response=await promise.catch(err=>{
//         console.log(err)
//     })
// if (response){
//     console.log(response)
// }
// second
// try{
// const response=await promise
// console.log(response)
// }catch(error){
//     console.log(error)
// }
// }

//     fetchData()

const genericFetchData=async(url)=>{
    try{
        const response= await fetch(url)
        const data= await response.json()
        return [data,null]
    }catch(error){
      return [null,error]
    }
}

    const fetchAPIData=async()=>{
      
           
        const [data,error]= await genericFetchData('https://jsonplaceholder.typicode.com/todos/1')
        if (data){
            console.log(data)
            return;
        }
        console.log(error)
    }
fetchAPIData()
   
    
