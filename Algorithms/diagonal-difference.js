//Problem statement

//Given a square matrix of size N×NN×N, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr){
  var primarySum = 0, secondarySum = 0, secIndex , n = arr.length;
  for(var i=0; i<n; i++){
		secIndex = n-i-1;
		primarySum += arr[i][i];
		secondarySum += arr[i][secIndex];
  }
  return Math.abs(primarySum - secondarySum);
}

console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])); //Returns |4-19| = 15