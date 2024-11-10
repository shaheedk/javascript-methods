
        // Array.lrngth
        const a=['slow','speed','run']
        console.log(a.length)

// array.length method is return the length of array 
// output is 3


// Array.toString
// Array.toString is convert the array to string

const arr=['hey','bro','how']
console.log(arr.toString())

// Array at()

const num=[1,3,4]
console.log(num.at(2))
// out is 3

//array join
// The join() method joins array elements into a string.


const b=['store','elaments','in','one','variable']
console.log(b.join())


// Array.pop
//The pop() method removes the last element from an array.
// const team=['rahul','salah','rono','njr']
// console.log(team.pop(1))
// document.write(team)

//array.push
// The push() method appends a new element to an array
// const numb=['one','two','three','four']
// x=numb.push('five')
// console.log('five')
// document.write(numb)


//array shift
//The shift() method removes the first element of an array (and "shifts" the other elements to the left):
const arrr=['hey','hai','hoi']
f=arrr.shift()
console.log(arrr)

// Array.unshift
// The unshift() method adds new elements to the beginning of an array:
const gun=['ak','mpfive','m4a1']
// l=gun.unshift('usp')
l=gun.split
console.log(gun)

// Array.delete
// don't use this method in array case


// Array.concat
// The concat() method merges (concatenates) arrays:
const animals=['tiger','lion','wolf']
const birds=['duck','eagle','crow']
const animalia=animals.concat(birds)
console.log(animalia)

// Array.copywithin
// copyWithin() copies array elements to another position in an array, overwriting existing values:

const alph=['a','b','c','d']
copy=alph.copyWithin(0,1)
console.log(copy)

// Array.flat
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();

console.log(newArr)

// Array.splice
// The splice() method adds new elements to an array:
// splice() is a JavaScript Array method that is used to remove, replace or insert items starting at a chosen index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,1,'lwm')
console.log(fruits)

// Array.toSplice
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
const singer=['arjith','arr','pritam']
s=singer.toSpliced(1,1,'vineeth')
console.log(s)


// Array slice
// The slice() Method
// Slice out a part of an array starting from array element 1 ("Orange"):
const pazham = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = pazham.slice(1,4);
console.log(pazham)
