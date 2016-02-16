// Problem statement
// Given a sequence consisting of parentheses, determine whether the expression is balanced. A sequence of parentheses is balanced if every open parentheses can be paired uniquely with a closed parentheses that occurs after the former. Also, the interval between them must be balanced. You will be given three types of parentheses: (, {, and [.

function isBalanced(txt){
  var brackets = "()[]{}", bracketStack = []; 
  for(var j=0; j<txt.length; j++){
      var bracketPosition = brackets.indexOf(txt.charAt(j));
      if(bracketPosition === -1) continue;

      if(bracketPosition%2 === 0){
          bracketStack.push(bracketPosition+1);
      }
      else{
          if(bracketStack.length === 0 || bracketStack.pop() !== bracketPosition){
              return "NO";                
          } 
      }
  }
  return (bracketStack.length === 0)? "YES": "NO";
}

console.log(isBalanced('()')); // returns YES
console.log(isBalanced('({)}')); // returns NO
console.log(isBalanced('{[(])}')); // returns NO
console.log(isBalanced('{{[[(())]]}}')); // returns YES