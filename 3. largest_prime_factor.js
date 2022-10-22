function largestPrimeFactor(number) {
	let divisor = 2, largestPrimeFactor = 2;
	// Source: www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
	while(number > 1) {
	  if(number%divisor === 0) {
		if(divisor > largestPrimeFactor)
		  largestPrimeFactor = divisor;
		number /= divisor;
	  } else {
		divisor++;
	  }
	}
	return largestPrimeFactor;
  }
  
  largestPrimeFactor(13195);