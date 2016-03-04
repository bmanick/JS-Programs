//Problem statement

//Given N integers, count the number of pairs of integers whose difference is K.

function pairsCount(arr,k){
	var pairs = 0, hash ={};
	for(var i=0; i<arr.length; i++){
    if(hash[arr[i]] === undefined)
      hash[arr[i]] = arr[i];        
	}
	for(var j in hash){
    if(hash[j+k] !== undefined || hash[j-k] !== undefined)
      pairs++;
	}
	return pairs;
}

console.log(pairsCount([1,5,3,4,2],2)); // returns 3 - There are 3 pairs of integers in the set with a difference of 2.