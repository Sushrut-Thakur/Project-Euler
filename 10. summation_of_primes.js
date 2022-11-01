function primeSummation(n) {
	
	let primes = [2];

	function isPrime(num) {
		
		for(let i of primes) {
			if(num%i === 0) {
				return false;
			}
		}
		return true;
	}

	let sumOfPrimes = 2;
	for(let i=3; i<n; i+=2) {
		if(isPrime(i)) {
			primes.push(i);
			sumOfPrimes += i;
		}
	}

	return sumOfPrimes;

}

primeSummation(17);