// promis race
// promise race return the firstpromis

const promise1=new Promise((resolve,reject)=>{
    resolve(['Javascript','Java'])
    });
    
    const promise2=new Promise((resolve,reject)=>{
        resolve(['React','Angular'])
        // reject("API Failed")
       
    })
   
    // reject any one this all promises are faile
    const allPromises=Promise.race([promise1,promise2])
    
    
    allPromises.then((res)=>{
        console.log(res.flat(Infinity)) //res.flat(Infinity) used for marge the sub arrays on one array.
    }).catch((err)=>{                   // the Infinity used for don't limit the flat                                
        console.log(err)
    }) 