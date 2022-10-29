function isWord(string) {
	return /^[a-z_][a-z_0-9]*$/i.test(string)
}

function isNumber(string) {
	return /^[0-9]+(?:\.[0-9]+)?$/.test(string)
}

module.exports = function (token) {
	if (isWord(token)) return 'word'
	if (isNumber(token)) return 'number'
	if (isOperator(token)) return 'operator'
}