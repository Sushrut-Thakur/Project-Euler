function specialPythagoreanTriplet(n) {
	
	for(let c = 1; c < n; c++) {
		for(let b = 1; b < c; b++) {
			for(let a = 1; a < b; a++) {
				if(a+b+c === n && a*a + b*b === c*c) {
					return (a*b*c);
				}
			}
		}
	}
	return;
}

specialPythagoreanTriplet(1000);