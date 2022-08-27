var isPalindrome = function (s) {
	s = s.toUpperCase();
	s = s.replace(/[&\/\\#,+\-`?;!()\[\]$~%.@'_":*?<>{} ]/g, '');
	console.log(s);
	let len = s.length;
	for (let i = 0; i <= len / 2; i++) {
		if (s[i] != s[len - (i + 1)]) {
			return false;
		}
	}
	return true;
};
