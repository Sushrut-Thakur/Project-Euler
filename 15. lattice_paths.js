function firstTry(gridSize) {
	let arr = [[0,0]];

	for(let i of arr) {
		let x = i[0];
		let y = i[1];
		if(x<gridSize) {
			arr.push([x+1, y]);
		}
		if(y<gridSize) {
			arr.push([x, y+1]);
		}
	}

	let count = 0;
	for(let i of arr) {
		if(i[0]===gridSize && i[1]===gridSize) {
			count++;
		}
	}

	console.log(arr.length);
	return count;
}

function firstOptimization(gridSize) {
	let arr = [[0,0]];
	let count = 0;

	for(let i of arr) {
		let x = i[0];
		let y = i[1];
		if(x===gridSize || y===gridSize) {
			count++;
			continue;
		}
		if(x<gridSize) {
			arr.push([x+1, y]);
		}
		if(y<gridSize) {
			arr.push([x, y+1]);
		}
	}

	console.log(arr.length);
	return count;
}

function latticePaths(gridSize) {

	function factorial(x) {
		let fact = 1;
		while(x>1) {
			fact *= x;
			x--;
		}
		return fact;
	}

	let numberOfPaths = factorial(2*gridSize) / (factorial(gridSize) * factorial(gridSize));
	// nCr = n! / r! * (n-r)!
	// if r = n/2
	// nCr = n! / (r! * r!)

	return parseInt(numberOfPaths);

}

latticePaths(4);