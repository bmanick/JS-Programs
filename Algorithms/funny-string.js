//Problem statement

//Suppose you have some string S having length N that is indexed from 0 to N−1. You also have some string R that is the reverse of string S. S is funny if the condition | S[j]−S[j−1] |=| R[j]−R[j−1] || S[j]−S[j−1] |=| R[j]−R[j−1] | is true for every j from 1 to N−1.

//Note: For some string S, S[j] denotes the ASCII value of the jth zero-indexed character in S. The absolute value of some integer x is written as | x |.

function funnyString(str){
  var isFunny = true;           
  for(var j=0; j<str.length/2; j++){                  
    if(Math.abs(str[j].charCodeAt(0)- str[j+1].charCodeAt(0)) !== Math.abs(str[str.length-j-1].charCodeAt(0)- str[str.length-j-2].charCodeAt(0))){
      isFunny = false;
      break;
    }
  }
  return isFunny;
}

console.log(funnyString('acxz')); // Returns true - |c−a|=2=|x−z||c−a|=2=|x−z|, |x−c|=21=|c−x||x−c|=21=|c−x|, |z−x|=2=|a−c||z−x|=2=|a−c| 
console.log(funnyString('bcxz')); // Returns false - |c−b|=1|c−b|=1 , but |x−z|=2|x−z|=2 