function time(callback) {
    setTimeout(()=>{
     callback ('hey this is a callback')
    },3000) 
   }
   
   console.log("start")
   time((value)=>{
       console.log(value)
   })
   console.log("end")
   
// 2nd case
   function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}
// function hh(){
//     console.log('coorect');
    
// }

// passing function as an argument
greet('Peter', callMe);

// callback hell
// means many functions  invocing using callback.this is just a test 


console.log('start')
function getDataFromApi1(callback){
setTimeout(()=>{
    callback(1)
},1000)

}


function getDataFromApi3(callback){
    setTimeout(()=>{
        callback(5)
    },1000)
    }
    function getDataFromApi2(callback){
        setTimeout(()=>{
            callback(5)
        },1000)
        }
        getDataFromApi1((value)=>{
            getDataFromApi2((api2val)=>{
                
           
            getDataFromApi3((api3val)=>{
                
            console.log(api2val+api3val+value)
    
        })
    })
})
 console.log('end')
