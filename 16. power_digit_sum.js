function powerDigitSum(exponent) {

	// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

	let num = BigInt(Math.pow(2, exponent)).toString();
	let arr = num.split("");
	let sum = 0;
	for(let i of arr) {
		sum += Number(i);
	}
	
	return sum;
}

powerDigitSum(15);