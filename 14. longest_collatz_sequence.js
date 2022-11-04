function longestCollatzSequence(limit) {

	function numberOfTerms(n) {
		let count = 1;
		while(n > 1) {
			if(n%2 === 0) {
				n /= 2;
			} else {
				n = (n * 3) + 1;
			}
			count++;
		}
		return count;
	}

	let term = 0;
	let maxCount = 0;

	for(let i=1; i<limit; i++) {
		let count = numberOfTerms(i);
		if(count>maxCount) {
			maxCount = count;
			term = i;
		}
	}

	return term;
	
}

longestCollatzSequence(14);