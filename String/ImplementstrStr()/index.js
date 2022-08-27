/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	let needleLen = needle.length;
	let haystackLen = haystack.length;
	let counter = 0;
	if (needleLen > 0 && haystackLen > 0) {
		let firstOccurence = haystack.indexOf(needle[0]);
		console.log(firstOccurence);
		for (let i = firstOccurence; i < haystackLen; i++) {
			if (haystack.substring(i, i + needleLen) == needle) {
				return i;
			}
		}
		return -1;
	}
	return 0;
};
