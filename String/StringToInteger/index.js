/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	const UPPER_LIMIT = Math.pow(2, 31) - 1;
	const LOWER_LIMIT = Math.pow(-2, 31);
	let len = s.length;
	let result = '';
	let i = 0;
	while (s[i] == ' ') {
		i++;
	}
	while (s[i] == '-' || s[i] == '+') {
		result += s[i];
		i++;
	}
	while (parseInt(s[i]) <= 9 || parseInt(s[i]) >= 0) {
		result += s[i];
		i++;
	}
	let intVal = parseInt(result);
	if (intVal > UPPER_LIMIT) {
		return UPPER_LIMIT;
	} else if (intVal < LOWER_LIMIT) {
		return LOWER_LIMIT;
	} else {
		if ((result.includes('-') && result.includes('+')) || !intVal) {
			return 0;
		}

		return result;
	}
};
