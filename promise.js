// success code will first exicute
const promise= new Promise((resolve,reject)=>{
    resolve('success')
    // reject('feiled!')
    })
    promise
    .then((response)=>{
        console.log(response)
    })
    // .catch((error)=>{
    //     console.log(error)
    // })
    
    //second Sample
    const promise1=new Promise((resolve,reject)=>{
        resolve(['Javascript','Java'])
        });    
        
        const promise2=new Promise((resolve,reject)=>{
            resolve(['React','Angular'])
        })
        
        promise1.then((res)=>{
            console.log(res)
        })
        promise2.then((res)=>{
            console.log(res)
        })
        
