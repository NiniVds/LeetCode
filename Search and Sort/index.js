/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let start = 1;
		let end = n;
		if (start == end) {
			return n;
		} else {
			while (start < end) {
				let mid = Math.floor(start + (end - start) / 2);
				console.log('asdasd', mid);
				if (isBadVersion(mid)) {
					end = mid;
				} else {
					start = mid + 1;
				}
			}
			return start;
		}
	};
};
