// Problem statement
// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after NN growth cycles?

function utopianTree(cycles){
	var n = 0;        
  for(var k=0;k<=cycles;k++){
    (k%2!=0 && k!=0) ? n*=2 : n+=1;            
  }
  return n;
}

console.log(utopianTree(1)); // returns 2
console.log(utopianTree(4)); // returns 7