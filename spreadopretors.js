
        // spreadopreter
        const details={
            name:'sheheed',
            age:18,
            qualifucation:'plustow',
        }
       const detail={...details}; //make a copy of obj
     console.log(detail);

    //   object method
    //const detail=Object.assign({},details)
   // console.log(detail)

//    concat using spreadoprator
const team1=['selah','ronaldo','luna']
const team2=['neymer','messi','rahul']
const players=[...team1,...team2]
console.log(players)

// push using spredoprator

 const add=[...team1,'ckvineeth']
//  or
// const add=[...team1,team2]
 console.log(add)

   