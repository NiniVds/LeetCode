/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	for (var i = 0; i < nums.length; i++) {
		if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
			return true;
		}
	}
	return false;
};
