// allSettled

//allSettled() is return a little promise.allSettled not a matter the reject and resolve .this method work in eny case
// like this:
// [ 
    // { status: 'fulfilled', value: [ 'Javascript', 'Java' ] },
    // { status: 'fulfilled', value: [ 'React', 'Angular' ] },
    // { status: 'rejected', reason: 'API Failed' }  line:21
//   ]
const promise1=new Promise((resolve,reject)=>{
    resolve(['Javascript','Java'])
    });
    
    const promise2=new Promise((resolve,reject)=>{
        resolve(['React','Angular'])
        // reject("API Failed")
       
    })
    const promise3=new Promise((resolve,reject)=>{
   //   resolve(['c','c++'])
        reject("API Failed")
       
    })
    // reject any one this all promises are faile
    const allPromises=Promise.allSettled([promise1,promise2,promise3])
    
    
    allPromises.then((res)=>{
        console.log(res.flat(Infinity)) //res.flat(Infinity) used for marge the sub arrays on one array.
    }).catch((err)=>{                   // the Infinity used for don't limit the flat                                
        console.log(err)
    }) 
  