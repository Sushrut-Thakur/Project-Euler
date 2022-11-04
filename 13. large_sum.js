function largeSum(arr) {

	function sum(arr) {
		let sum = 0;
		for(let i in arr) {
			sum += Number(arr[i]);
		}
		return sum;
	}

	let summation = String(sum(arr));
	summation = summation.replace('.', '');
	summation = summation.slice(0,10);
	summation = Number(summation);

	// let summation = Number(String(sum(arr)).replace('.', '').slice(0,10));

	return summation;
}

// Only change code above this line

const testNums = [
'37107287533902102798797998220837590246510135740250',
'46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);