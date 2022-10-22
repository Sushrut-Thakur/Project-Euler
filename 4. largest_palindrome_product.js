function largestPalindromeProduct(n) {

	// Source: https://www.includehelp.com/code-snippets/check-number-is-palindrome-or-not-in-javascript.aspx
	function isPalindrome(num) {
		let rem, final = 0;
		let temp = num;
		while(temp>0) {
			rem = temp%10;
			temp = parseInt(temp/10);
			final = final*10 + rem;
		}

		if(final === num)
			return true;
		else
			return false;
	}

	let temp = "";
	for(let i=0; i<n; i++)
		temp += "9";
	temp = Number(temp);
	for(let i = temp; i>(temp-50); i--) {
		for(let j=i; j>(i-100); j--) {
			let palindrome = i*j;
			if(isPalindrome(palindrome))
			return palindrome;
		}
	}
	return 0;
}

largestPalindromeProduct(3);