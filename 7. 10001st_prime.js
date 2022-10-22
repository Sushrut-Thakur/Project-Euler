function nthPrime(n) {

	// Source: https://stackoverflow.com/questions/21966000/need-to-generate-prime-numbers-in-javascript
	function isPrime(num) {
		for(let i=2; i<num; i++) {
			if(num%i === 0)
				return false;
		}
		return true;
	}

	let counter = 1;
	let prime = 0;
	for(let i=3; counter<n; i+=2) {
		if(isPrime(i)){
			counter++;
			prime = i;
		}
	}
	return prime;
}

nthPrime(10001);