function multiplesOf3and5(number) {
	let multiples = [];
	for(let i=1; i<number; i++) {
	  if(i%3 === 0 || i%5 === 0)
		multiples.push(i);
	}
	let sum = 0;
	for(let i of multiples) {
	  sum += i;
	}
	return sum;
  }
  
  multiplesOf3and5(1000);