// Problem statement
// Given an integer, NN, traverse its digits (dd1,dd2,...,ddn) and determine how many digits evenly divide NN (i.e.: count the number of times NN divided by each digit ddi has a remainder of 00). Print the number of evenly divisible digits.

// Note: Each digit is considered to be unique, so each occurrence of the same evenly divisible digit should be counted (i.e.: for N=111N=111, the answer is 33).

function findDigits(n){
	var digits = [], count = 0, m = n;
	// Extract all digits
  while(n!=0){  	
    if(m%(n%10) === 0) count++;
    n = parseInt(n/10);
  }
  console.log(count);
}

console.log(findDigits(1012)); //returns 3 - 1012 is divisible by 1,1 & 2
console.log(findDigits(5368)); //returns 1 - 5368 is divisible by 8