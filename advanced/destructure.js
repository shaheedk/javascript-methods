// Spread Oprators
const globalPlayer={
    id:0,
    name:'bot',
    powerLevel:100,
}
const player1={...globalPlayer}//make a copy
player1.powerLevel=40;
console.log(player1)
console.log(globalPlayer)

const team1=['selah','ronaldo','luna']
const team2=['neymer','messi','rahul']
const players=[...team1,...team2]
console.log(players)
//same use of concat in array
// marge the tow array to one

// destructuring 

const destructArr=['shaheed','tirur','18']

const[name,place,age]=destructArr//destucturing is give key name for array values
console.log(name)

const destructObj={
    student:'shaheed',
    from:'perunthallur',
    dob:2006,
}
// in object allready key value pair .ee casil namukk neritt vilikkan vendiyan destructur cheyyunnath ithin order aayitt destructur cheyyanamennilla
 
const{ student,from,dob}=destructObj
console.log( student,from)