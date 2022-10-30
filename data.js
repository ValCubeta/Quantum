const evalCode = require('./evalCode')
const readLine = require('./read')

const data = {
	write({ values = [], sep = '', end = ''} = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	},
	print({ values = [], sep = ' ', end = '\r\n' } = {}) {
		functions.write({ values, sep, end })
	},
	exit({ code } = {}) {
		process.exit(code)
	},
	eval({ string } = {}) {
		return evalCode(string)
	},
	read({ end = '\n' }) {
		if (end) {
			if (end.length !== 1) {
				evalCode(`throw RangeError('the length of the expected end of input must be 1')`)
			}
		}
		return readLine()
	}
}

data.global = data
data.this = data

module.exports = data