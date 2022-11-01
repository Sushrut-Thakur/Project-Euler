function fiboEvenSum(n) {
	let sum = 2, first = 1, second = 2;
	for(let i = first + second; i<=n; first=second, second = i, i = first + second) {
	  if(i%2 === 0) {
		sum += i;
	  }
	}
	console.log(sum);
	return sum;
}