// Problem statement

// Pangrams are sentences constructed by using every letter of the alphabet at least once.

function isPangram(str){	
	var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split(''), str = str.toLowerCase();
	for(var i=0; i<26; i++){
	  if(str.indexOf(alphabets[i]) === -1){	    
	  	return false;
	  }
	}
	return true;	
}

console.log(isPangram('We promptly judged antique ivory buckles for the next prize')); //Returns true
console.log(isPangram('We promptly judged antique ivory buckles for the prize')); //Returns flase