// ASSESSMENT 3: Coding Practical Questions


//1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fib = (num) => {

    //start with array of 0 and 1
    //start the for loop at index of 2 to use the first two numbers 0, 1 to start adding
    //find the value of the index before and the index before before
    //add those two values to get new value
    //push new value into the newArray 
    //start newArray with 1. then push new values from there
      
  let arr = [0, 1];
  let newArray = [1];
  
  for(let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]; 
    newArray.push(arr[i]);
  }
  
  return newArray;
}
    
// console.log(fib(10));
     

//2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//make a function
//filter through array to get only numbers using typeof
//filter thru new array to get only odd numbers using %
//sort thru the new array using sort
//return new array

const odd = (arr) => {
    let newArray = arr.filter(value => typeof(value) === "number")
    // console.log(newArray)
    newArray = newArray.filter(value => value % 2 !== 0)
    newArray.sort(function(a, b){return a-b});

    return newArray
}

// console.log(odd(fullArr1))
// console.log(odd(fullArr2))



//3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//make a function
//split string into an array
//check the length of the array
//if the array length is even by using % return the two middle numbers
    //divide arr length by 2
    //return index of that number 
    //return index of the number + 1
//else if array is odd return the middle number
    //add one to length 
    //divide new length by 2
    //return index of the new length of the array

const mid = (string) => {
    let arr = string.split("")
    let length = arr.length

    if(length % 2 === 0){
        length = length / 2
        return `${ arr[length - 1] }${ arr[length] }`
    }else{
        length = length + 1
        length = length / 2
        return `${arr[length]}`
    }
}

// console.log(mid(middleLetters1))
// console.log(mid(middleLetters2))



//4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. 
//Area of a sphere =  4πr^2 (four * pi * radi squared)

class Sphere {
    constructor(radi){
        this.radi = radi
    }
    area = () => {
        let radi = this.radi
        let newRadi = radi * radi
        // this.radi = this.radi * this.radi
        let area = 4 * 3.14 * newRadi
        return area
    }
}

let mySphere1 = new Sphere(2)
let mySphere2 = new Sphere(3)
// console.log(mySphere1.area())
// console.log(mySphere2.area())


//5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//make a function
//take in array
//make a new array
//new array will have the original array[0] + array[1] 
//can use variable to keep track of the total between added array indexs
//push that new sum into the new array

const add = (arr) => {
    let newArray = []
    let sum = 0
    if(arr.length === 0){
        return newArray
    }else{
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index]
        newArray.push(sum)
    }
}
    return newArray
}

// console.log(add(numbersToAdd1))
// console.log(add(numbersToAdd2))
// console.log(add(numbersToAdd3))



