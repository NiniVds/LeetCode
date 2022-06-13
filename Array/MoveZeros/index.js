/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	var len = nums.length; // length of array nums to be stored in len variable
	if (len >= 1 && len <= 10000) {
		for (var i = 0; i < nums.length; i++) {
			if (nums[i] === 0) {
				var indexOfZero = nums.indexOf(nums[i]);
				nums.splice(indexOfZero, 1);
				nums.push(0);
			}
		}
	}
	return nums;
};
