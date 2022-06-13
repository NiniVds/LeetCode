function twoSum(nums, target) {
	let resultIndice = [];
	for (let j = 0; j < nums.length - 1; j++) {
		let k = j + 1;
		for (let i = k; i < nums.length; i++) {
			if (nums[j] + nums[i] === target) {
				resultIndice.push(j);
				resultIndice.push(i);
				return resultIndice;
			}
		}
	}
	return resultIndice;
}
