//Problem statement

// You are given a sorted list of distinct integers from 0 to 99, for instance [0, 1, 2, 50, 52, 75]. Your task is to produce a string that describes numbers missing from the list; in this case "3-49,51,53-74,76-99". The items should be sorted in ascending order and separated by commas. When a gap spans only one number, the item is the number itself; when a gap is longer, the item comprises the start and the end of the gap, joined with a minus sign.

function missignNumbers(arr){
	var results = [];
	for(var i=0; i<arr.length-1; i++){
	  var diff = arr[i+1] - arr[i];
	  if(diff === 1) continue;
	  (diff > 2)? results.push((arr[i]+1) + '-' +(arr[i+1]-1)) : results.push(arr[i]+1);
	}
	if(arr[0] !== 0)
	  results.push('0-' + (arr[0]-1));
	if(arr[arr.length-1] !== 99)
	  results.push(arr[arr.length-1]+1 + '-99');
	return results.toString();
}

missignNumbers([0, 1, 2, 50, 52, 75]) //returns 3-49,51,53-74,76-99
missignNumbers([40, 41, 42, 43, 52, 78]) //returns 0-39,44-51,53-77,79-99