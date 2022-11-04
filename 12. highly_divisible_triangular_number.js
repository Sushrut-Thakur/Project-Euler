function divisibleTriangleNumber(n) {

	// Source: https://www.geeksforgeeks.org/find-all-factors-of-a-natural-number/

	function numberOfFactors(num) {
		let factors = [1, num];
		for(let i=2; i<=Math.sqrt(num); i++) {
			if(num%i === 0) {
				if(n/i != i)
					factors.push(n/i);
				factors.push(i);
			}
		}

		return factors.length;
	}

	let triangleNumber = 0;
	for(let i=1; true; i++) {
		triangleNumber += i;
		if(numberOfFactors(triangleNumber) > n) {
			break;
		}
	}

	return triangleNumber;
}

divisibleTriangleNumber(500);