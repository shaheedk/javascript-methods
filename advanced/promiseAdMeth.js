// promsies all() is used for return multiple APIs .all promises make a connection to anathor promis.ella promisasum success ayal mathram console cheytha mathi enna 
// casil aan ithinde use.

const promise1=new Promise((resolve,reject)=>{
resolve(['Javascript','Java'])
});

const promise2=new Promise((resolve,reject)=>{
    resolve(['React','Angular'])
    // reject("API Failed")
   
})
const promise3=new Promise((resolve,reject)=>{
  resolve(['c','c++'])
    // reject("API Failed")
   
})
// reject any one this all promises are faile
const allPromises=Promise.all([promise1,promise2,promise3])


allPromises.then((res)=>{
    console.log(res.flat(Infinity)) //res.flat(Infinity) used for marge the sub arrays on one array.
}).catch((err)=>{                   // the Infinity used for don't limit the flat                                
    console.log(err)
})