const string = require('./string')

module.exports = {
	'throw': function (value, stack) {
		const write = process.stderr.write
		write(string(value))
		write('\r\n')
		write(stack)
		write('\r\n')
		exit(1)
	}
}