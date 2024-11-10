
          const sampleArr=[
    
    {
    name:'sheheed',
    place:'malappuram',
    age:18,

},
{
    name:'sheheed',
    place:'malappuram',
    age:16,

},{
    name:'sheheed',
    place:'malappuram',
    age:18,

}
    ]
    const newArray=sampleArr.filter((value,index,Array)=>value.age===18)
    console.log(newArray)
