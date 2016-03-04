//Problem statement

//You will be given a list of 32 bits unsigned integers. You are required to output the list of the unsigned integers you get by flipping bits in its binary representation (i.e. unset bits must be set, and set bits must be unset).

function flippingBits(n){
  var binary = (n >>> 0).toString(2), digits = [], zeros = 32 - binary.length;        
  for(var j=0; j<zeros; j++) binary = '0' + binary;        
  digits = binary.split('');
  for(var k=0; k<32; k++){
      digits[k] = (digits[k] == 1)? 0 : 1;
  }        
  return parseInt(digits.join(''),2).toString(10);
}

console.log(flippingBits(2147483647)); //Retuens 2147483648 
console.log(flippingBits(1)); //Retuens 4294967294 -  1 as unsigned 32-bits is 00000000000000000000000000000001 and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294. 