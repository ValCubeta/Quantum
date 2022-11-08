const evalCode = require('./evalCode')
const readLine = require('./read')
const typeOf = require('./typeof')

const data = {
	write({ values = [], sep = '', end = '' } = {}) {
		process.stdout.write(values.join(sep))
		process.stdout.write(end)
	},
	print({ values = [], sep = ' ', end = '\r\n' } = {}) {
		data.write({ values, sep, end })
	},
	exit({ code } = {}) {
		process.exit(code)
	},
	eval({ string } = {}) {
		return evalCode(string)
	},
	read() {
		return readLine()
	},
	clear() {
		console.clear()
	},
	typeof({ value } = {}) {
		return typeOf(value)
	},
	assert({ condition, message }) {
		evalCode('unless condition:throw message', { condition, message })
	}
}

data.global = data
data.this = data

module.exports = data