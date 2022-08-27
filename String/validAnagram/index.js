var isAnagram = function (s, t) {
	t = t.split('');
	for (let i = 0; i < s.length; i++) {
		let loc = t.indexOf(s[i]);
		if (loc != -1) {
			t.splice(loc, 1);
		} else {
			return false;
		}
	}
	if (t.length > 0) {
		return false;
	}
	return true;
};
