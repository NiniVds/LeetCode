var isPalindrome = function (x) {
	x = x.toString();
	let len = x.length;
	if (len % 2 === 0) {
		let i = 0;
		for (let j = len - 1; j >= len / 2; j--) {
			if (x[j] !== x[i]) {
				return false;
			}
			i++;
		}
	} else {
		let i = 0;
		for (let j = len - 1; j >= Math.floor(len / 2); j--) {
			if (x[j] !== x[i]) {
				return false;
			}
			i++;
		}
	}
	return true;
};

var isPalindrome = function (x) {
	x = x.toString();
	let y = x.split('');
	let rev = y.reverse().join('');
	let r1 = parseInt(x) - 10;
	let r2 = parseInt(rev) - 10;
	if (r1 == r2) {
		return true;
	}
	return false;
};
