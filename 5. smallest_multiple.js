function smallestMult(n) {

	// Source: https://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
	function gcd(a, b) {
		if(!b)
			return a;
		else
			return gcd(b, a%b);
	}

	function lcm(a, b) {
		return (a*b) / gcd(a, b);
	}

	let arr = [];
	for(let i=1; i<=n; i++)
		arr.push(i);
	
	let smallestMultiple = 1;
	arr.forEach((n) => {
		smallestMultiple = lcm(smallestMultiple, n)
	});
	return smallestMultiple;
}

smallestMult(20);