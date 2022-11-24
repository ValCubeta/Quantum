const toString = require('./toString')

module.exports = {
	'throw': function (value, stack) {
		const write = process.stderr.write
		write(toString(value))
		write('\r\n')
		write(stack)
		write('\r\n')
		exit(1)
	},
	'equals': function (value, other) {}
}