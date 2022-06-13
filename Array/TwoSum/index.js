/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		subtract = target - nums[i];

		if (nums.indexOf(subtract) > -1 && nums.indexOf(subtract) != i) {
			return [i, nums.indexOf(subtract)];
		}
	}
};
