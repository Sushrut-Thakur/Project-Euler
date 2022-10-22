function sumSquareDifference(n) {
	let sumOfSquare = 0;
	let squareOfSum = 0;
	for(let i=1; i<=n; i++) {
		squareOfSum += i;
		sumOfSquare += i**2;
	}
	squareOfSum **= 2;
	return (squareOfSum - sumOfSquare);
}

sumSquareDifference(100);