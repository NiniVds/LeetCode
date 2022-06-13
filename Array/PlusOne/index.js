/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	var len = digits.length;
	var carry = 0;
	for (var i = len - 1; i >= 0; i--) {
		var increment = digits[i] + 1;
		if (increment > 9) {
			digits[i] = increment % 10;
			carry = 1;
		} else {
			digits[i] = increment;
			carry = 0;
			break;
		}
	}
	if (carry > 0) {
		digits.unshift(1);
	}
	return digits;
};
