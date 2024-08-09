// PART 1: printing with prompt

const { access } = require("fs")

// Prompt the user for a number and cast it to a number
let userNum = parseInt(prompt("enter any number"))

// Prompt the user for another number that is bigger than the first number and cast it to a number

let userNum2 = parseInt(prompt("enter a larger number"))

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number



for(let i = userNum; i<= userNum2; i++){
  console.log(i)
}



// PART 2: Averaging an array
// Create an array of numbers 
let nums = [2,4,6,8,10]


// Write a for loop that calculates the sum of the elements 




let sum = 0
for(let i = 0; i<nums.length; i++){
  console.log(sum+=nums[i])
}

// Using the sum, calculate the average of all the elements (sum divided by the length of the array)

let average = sum/nums.length
console.log("Average:",average)