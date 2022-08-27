var firstUniqChar = function (s) {
	for (let i in s) {
		console.log(i);
		if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) {
			return s.indexOf(s[i]);
		}
	}
	return -1;
};
